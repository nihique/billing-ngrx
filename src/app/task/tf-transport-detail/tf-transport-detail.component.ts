import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-transport-detail',
    templateUrl: 'tf-transport-detail.component.html'
})

export class TfTransportDetailComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() { }
}
