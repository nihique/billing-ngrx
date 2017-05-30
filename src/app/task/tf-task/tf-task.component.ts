import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'app/model/task';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-task',
    templateUrl: './tf-task.component.html',
})
export class TfTaskComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() {
    }
}
