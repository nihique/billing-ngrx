import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-toolbar',
  templateUrl: './task-toolbar.component.html',
})
export class TaskToolbarComponent implements OnInit {
    nameFormatted = 'TODO: nameFormatted';
    taskMode = 'edit';
    tasksLookups = [];

    constructor() { }

    ngOnInit() {
    }
}
