import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-merge-group-input',
    templateUrl: 'tf-merge-group-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TfMergeGroupInputComponent {
    @Input() options: ITfMergeGroupOptions;
}
