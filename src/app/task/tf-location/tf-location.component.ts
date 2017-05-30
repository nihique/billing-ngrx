import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-location',
    templateUrl: 'tf-location.component.html'
})

export class TfLocationComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;
    @Input() title: string;
    @Input() path: string;

    constructor() { }

    ngOnInit() { }
}
