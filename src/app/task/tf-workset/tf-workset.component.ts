import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-workset',
    templateUrl: 'tf-workset.component.html'
})

export class TfWorksetComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() { }
}
