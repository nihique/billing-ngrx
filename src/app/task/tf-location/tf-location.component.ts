import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-location',
    templateUrl: 'tf-location.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TfLocationComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Input() title: string;
    @Input() path: string;

    constructor() { }

    ngOnInit() { }
}
