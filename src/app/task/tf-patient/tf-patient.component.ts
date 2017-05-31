import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options.model';

@Component({
    selector: 'tf-patient',
    templateUrl: 'tf-patient.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TfPatientComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() { }
}
