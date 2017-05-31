import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITask } from 'app/model/task.model';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-task',
    templateUrl: 'tf-task.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TfTaskComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() {
    }
}
