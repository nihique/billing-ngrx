import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from 'lodash';
import { ITfMergeGroupOptions } from 'app/model/tf-merge-group-options';

@Component({
    selector: 'tf-patient',
    templateUrl: 'tf-patient.component.html'
})

export class TfPatientComponent implements OnInit {
    @Input() tfMergeGroupOptions: Dictionary<ITfMergeGroupOptions>;

    constructor() { }

    ngOnInit() { }
}