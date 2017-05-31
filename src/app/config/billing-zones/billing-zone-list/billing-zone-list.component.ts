import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'billing-zone-list',
    templateUrl: 'billing-zone-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillingZoneListComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
