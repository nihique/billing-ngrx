import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BillingZonesShellComponent } from './billing-zones-shell.component';
import { BillingZoneListComponent } from './billing-zone-list/billing-zone-list.component';
import { BillingZoneDetailComponent } from './billing-zone-detail/billing-zone-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
    ],
    exports: [
    ],
    declarations: [
        BillingZonesShellComponent,
        BillingZoneListComponent,
        BillingZoneDetailComponent,
    ],
    providers: [
    ],
})
export class BillingZonesModule { }
