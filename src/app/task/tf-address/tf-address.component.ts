import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-address',
    templateUrl: 'tf-address.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TfAddressComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Input() path: string;

    constructor() { }

    ngOnInit() { }
}
