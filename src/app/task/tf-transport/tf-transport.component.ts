import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-transport',
    templateUrl: 'tf-transport.component.html'
})

export class TfTransportComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() { }
}
