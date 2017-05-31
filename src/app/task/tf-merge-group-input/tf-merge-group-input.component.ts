import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, OnInit } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-merge-group-input',
    templateUrl: 'tf-merge-group-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TfMergeGroupInputComponent implements OnInit {
    @Input() options: ITfMergeGroupOptions;
    @Output() fieldChanged = new EventEmitter();

    value: any;

    ngOnInit(): void {
        this.value = this.options.value;
    }

    change(value) {
        this.value = value;
    }

    blur() {
        this.fieldChanged.emit({
            field: this.options.field,
            value: this.value,
        });
    }
}
