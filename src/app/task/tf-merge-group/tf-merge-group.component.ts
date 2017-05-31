import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-merge-group',
    templateUrl: 'tf-merge-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TfMergeGroupComponent implements OnInit {
    @Input() options: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit(): void {
    }
}
