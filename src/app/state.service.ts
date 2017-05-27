import { BillingApiClient } from 'app/common/billing-api-client.service';
import { IBillingConfiguration } from 'app/model/billing-configuration';
import { Injectable } from '@angular/core';
import { IWorkflow } from 'app/model/worfklow';
import { IWorkflowStep } from 'app/model/workflow-step';
import { IQueue } from 'app/model/queue';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class State {
    configuration: IBillingConfiguration;
    workflow: IWorkflow;
    workflowStep: IWorkflowStep;
    queues: Array<IQueue>;
    queue: IQueue;

    constructor(
        private billingApiClient: BillingApiClient
    ) {}

    init() {
        this.refreshConfiguration();
    }

    refreshConfiguration() {
        return this.billingApiClient
            .getConfiguration()
            .map(configuration => {
                this.configuration = configuration;
                return this;
            });
    }

    refreshQueue() {
        return this.billingApiClient
            .getDefaultWorkflow()
            .map(workflow => {
                this.workflow = workflow;
                this.workflowStep = workflow.workflowSteps[0];
            })
            .mergeMap(_ => {
                return this.billingApiClient
                    .getQueues(this.workflowStep.id)
                    .map(queues => {
                        this.queues = queues;
                        this.queue = queues[0];
                    });
            })
            .mergeMap(_ => {
                return this.billingApiClient
                    .getTasksInQueue({
                        queueId: this.queue.id,
                        currentPage: 0,
                        itemsPerPage: 10
                    })
                    .map(tasksPaged => {
                        this.queue.tasksPaged = tasksPaged;
                    });
            })
            .map(x => this);
    }
}
