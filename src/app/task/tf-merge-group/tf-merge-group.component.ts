import { Component, Input, OnInit } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-merge-group',
    templateUrl: './tf-merge-group.component.html'
})
export class TfMergeGroupComponent implements OnInit {
    @Input() options: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit(): void {
    }
}
