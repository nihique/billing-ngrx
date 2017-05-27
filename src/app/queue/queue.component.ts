import { Component, OnInit } from '@angular/core';
import { State } from 'app/state.service';
import { chain, iteratee, extend } from 'lodash';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
})
export class QueueComponent implements OnInit {
    public workflowStep;
    public groupedTasks;
    public queue;

    constructor(
        private state: State,
    ) {}

    ngOnInit() {
        this.workflowStep = this.state.workflowStep;
        this.queue = this.state.queue;
        this.groupedTasks = this.refreshGroupedTasks(this.queue);
    }

    private refreshGroupedTasks(queue) {
        return chain(queue.tasksPaged.items)
            .map(this.transformTask)
            .groupBy('worksetId')
            .orderBy(iteratee('[0].worksetId'), 'desc')
            .value();
    }

    private transformTask(task) {
        return chain(task)
            .pick([
                'id',
                'worksetId',
                'taskTypeName',
                'taskArchived',
                'taskMovedToNextWorkflowStep'
            ])
            .thru(function (transformed) {
                return extend({}, transformed, {
                    transportStatusName: 'TODO: transportStatus',
                    transportStatusStyle: 'TODO: transportStatusStyle',
                    dateParts: { date: 'TODO: date', time: 'TODO: time' },
                    patientName: 'TODO: patientName',
                    transportTaskTypeName: 'TODO: taskType',
                    taskStatusName: 'TODO: taskStatus',
                });
            })
            .value();
    }
}
