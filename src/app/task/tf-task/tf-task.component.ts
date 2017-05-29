import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'app/model/task';

@Component({
    selector: 'tf-task',
    templateUrl: './tf-task.component.html',
})
export class TfTaskComponent implements OnInit {
    @Input() task: ITask;

    constructor() { }

    ngOnInit() {
    }
}
