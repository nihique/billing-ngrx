import { Component, OnInit } from '@angular/core';
import { State } from "app/state.service";

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
        this.groupedTasks = [];
        this.workflowStep = this.state.workflowStep;
        this.queue = this.state.queue;
    }

    private refreshGroupedTasks(queue) {
        // self.groupedTasks = _.chain(queue.tasksPaged.items)
        //     .map(transformTask)
        //     .groupBy('worksetId')
        //     .orderBy(_.iteratee('[0].worksetId'), 'desc')
        //     .value();
    }
}
