import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
})
export class QueueComponent implements OnInit {
    public workflowStep;
    public groupedTasks;
    public queue;

    constructor() { }

    ngOnInit() {
        this.groupedTasks = [];
        this.workflowStep = {};
        this.queue = {};
    }

    private refreshGroupedTasks(queue) {
        // self.groupedTasks = _.chain(queue.tasksPaged.items)
        //     .map(transformTask)
        //     .groupBy('worksetId')
        //     .orderBy(_.iteratee('[0].worksetId'), 'desc')
        //     .value();
    }
}
