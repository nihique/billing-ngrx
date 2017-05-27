import { BillingApiClient } from 'app/common/billing-api-client.service';
import { IBillingConfiguration } from 'app/model/billing-configuration';
import { Injectable } from '@angular/core';
import { IWorkflow } from 'app/model/worfklow';
import { IWorkflowStep } from 'app/model/workflow-step';
import { IQueue } from 'app/model/queue';

@Injectable()
export class StateService {
    configuration: IBillingConfiguration;
    workflow: IWorkflow;
    workflowStep: IWorkflowStep;
    queues: Array<IQueue>;
    queue: IQueue;

    constructor(
        private billingApiClient: BillingApiClient
    ) {}

    init() {
        this.billingApiClient
            .getConfiguration()
            .subscribe(configuration => this.configuration = configuration);

        this.billingApiClient
            .getDefaultWorkflow()
            .subscribe(workflow => {
                this.workflow = workflow;
                this.workflowStep = workflow.workflowSteps[0];
                this.billingApiClient
                    .getQueues(this.workflowStep.id)
                    .subscribe(queues => {
                        this.queues = queues;
                        this.queue = queues[0];
                    });
            });
    }
}
