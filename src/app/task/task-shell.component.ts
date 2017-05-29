import { Component, OnInit, Input } from '@angular/core';
import { State } from './../state.service';
import { ITask } from 'app/model/task';

@Component({
    selector: 'task-shell',
    templateUrl: './task-shell.component.html',
})
export class TaskShellComponent implements OnInit {
    public taskMode = 'edit';
    public taskTypeName = 'Transport';
    public task: ITask;

    constructor(
        private state: State
    ) { }

    ngOnInit() {
        debugger;
        this.task = this.state.task;
    }
}
