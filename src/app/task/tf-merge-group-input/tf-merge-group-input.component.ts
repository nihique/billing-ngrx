import { Component, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-merge-group-input',
    templateUrl: './tf-merge-group-input.component.html'
})
export class TfMergeGroupInputComponent {
    @Input() options: ITfMergeGroupOptions;
}
