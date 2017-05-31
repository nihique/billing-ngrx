import { BillingApiClient } from 'app/common/billing-api-client.service';
import { IBillingConfiguration } from 'app/model/billing-configuration.model';
import { Injectable } from '@angular/core';
import { IWorkflow } from 'app/model/worfklow.model';
import { IWorkflowStep } from 'app/model/workflow-step.model';
import { IQueue } from 'app/model/queue.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import { ILookups } from 'app/model/lookups.model';
import { ITask } from 'app/model/task.model';


@Injectable()
export class State {
    configuration: IBillingConfiguration;
    lookups: ILookups;
    workflow: IWorkflow;
    workflowStep: IWorkflowStep;
    queues: Array<IQueue>;
    queue: IQueue;
    task: ITask;

    constructor(
        private billingApiClient: BillingApiClient
    ) {}

    resolveShell(): Observable<State> {
        return this.billingApiClient
            .getConfiguration()
            .map(configuration => {
                this.configuration = configuration;
            })
            .mergeMap(_ => {
                return this.billingApiClient
                    .getLookups()
                    .map(lookups => {
                        this.lookups = lookups;
                    });
            })
            .map(_ => this);
    }

    resolveQueueShell(): Observable<State> {
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
                        this.queue.tasksInQueuePaged = tasksPaged;
                    });
            })
            .map(_ => this);
    }

    resolveTaskShell(taskId: number): Observable<State> {
        return this.billingApiClient
            .getTask(taskId)
            .map(task => {
                this.task = task;
            })
            .map(_ => this);
    }
}
