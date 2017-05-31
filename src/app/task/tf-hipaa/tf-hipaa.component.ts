import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-hipaa',
    templateUrl: 'tf-hipaa.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TfHipaaComponent {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Output() fieldChanged = new EventEmitter();
}
