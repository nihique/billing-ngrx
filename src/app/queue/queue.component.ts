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
}
