import { Component, OnInit } from '@angular/core';
import { State } from './../state.service';
import { chain, iteratee, extend } from 'lodash';
import { IWorkflowStep } from 'app/model/workflow-step';
import { ITaskInQueue } from 'app/model/task-in-queue';
import { IQueue } from 'app/model/queue';

@Component({
  selector: 'queue',
  templateUrl: './queue-shell.component.html',
})
export class QueueShellComponent implements OnInit {
    public workflowStep: IWorkflowStep;
    public groupedTasks: Array<IGroupedTaskVm>;
    public queue: IQueue;

    constructor(
        private state: State,
    ) {}

    ngOnInit() {
        this.workflowStep = this.state.workflowStep;
        this.queue = this.state.queue;
        this.groupedTasks = this.refreshGroupedTasks(this.queue);
    }

    private refreshGroupedTasks(queue: IQueue): Array<IGroupedTaskVm> {
        return chain(queue.tasksInQueuePaged.items)
            .map(this.transformTask)
            .groupBy('worksetId')
            .orderBy(iteratee('[0].worksetId'), 'desc')
            .value();
    }

    private transformTask(task: ITaskInQueue): ITaskVm {
        return chain(task)
            .pick<ITaskVm>([
                'id',
                'worksetId',
                'taskTypeName',
                'taskArchived',
                'taskMovedToNextWorkflowStep'
            ])
            .thru<ITaskVm>(function (transformed) {
                return extend<ITaskVm>({}, transformed, {
                    transportStatusName: 'TODO: transportStatus',
                    transportStatusStyle: 'TODO: transportStatusStyle',
                    dateParts: { date: 'TODO: date', time: 'TODO: time' },
                    patientName: task.patientFirstName + task.patientLastName,
                    transportTaskTypeName: 'TODO: taskType',
                    taskStatusName: 'TODO: taskStatus',
                } as ITaskVm);
            })
            .value();
    }
}

export interface IGroupedTaskVm {
    tasks: Array<IGroupedTaskVm>;
}

export interface ITaskVm {
    id: number;
    worksetId: number;
    taskTypeName: string;
    taskArchived: string;
    taskMovedToNextWorkflowStep: boolean;
    transportStatusName: string;
    transportStatusStyle: string;
    dateParts: IDatePartsVm;
    patientName: string;
    transportTaskTypeName: string;
    taskStatusName: string;
}

export interface IDatePartsVm {
    date: string;
    time: string;
}
