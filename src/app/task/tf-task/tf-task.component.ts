import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ITask } from 'app/model/task.model';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';
import { Dictionary } from 'lodash';

@Component({
    selector: 'tf-task',
    templateUrl: 'tf-task.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TfTaskComponent {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Output() fieldChanged = new EventEmitter();
}
