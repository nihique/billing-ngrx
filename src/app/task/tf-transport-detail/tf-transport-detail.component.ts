import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-transport-detail',
    templateUrl: 'tf-transport-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TfTransportDetailComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() { }
}
