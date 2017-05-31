import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-merge-group',
    templateUrl: 'tf-merge-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TfMergeGroupComponent implements OnInit {
    @Input() options: ITfMergeGroupOptions;
    @Output() fieldChanged = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }
}
