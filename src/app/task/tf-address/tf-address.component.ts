import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-address',
    templateUrl: 'tf-address.component.html'
})

export class TfAddressComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Input() path: string;

    constructor() { }

    ngOnInit() { }
}
