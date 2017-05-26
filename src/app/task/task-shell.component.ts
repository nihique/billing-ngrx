import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'task-shell',
    templateUrl: './task-shell.component.html',
})
export class TaskShellComponent implements OnInit {
    taskMode = 'edit';
    taskTypeName = 'Transport';

    constructor() { }

    ngOnInit() {
    }
}
