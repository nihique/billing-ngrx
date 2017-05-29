import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'task-toolbar',
  templateUrl: './task-toolbar.component.html',
})
export class TaskToolbarComponent {
    nameFormatted = 'TODO: nameFormatted';
    taskMode = 'edit';
    tasksLookups = [];

    constructor(
        private location: Location,
    ) { }

    goBack() {
        this.location.back();
    }
}
