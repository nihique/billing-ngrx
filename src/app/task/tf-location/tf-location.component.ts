import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-location',
    templateUrl: 'tf-location.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TfLocationComponent {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Input() title: string;
    @Input() path: string;
    @Output() fieldChanged = new EventEmitter();
}
