import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueShellComponent } from './queue/queue-shell.component';
import { BillingZoneShellComponent } from './config/billing-zones/billing-zone-shell/billing-zone-shell.component';
import { BillingZoneListComponent } from './config/billing-zones/billing-zone-list/billing-zone-list.component';
import { BillingZoneDetailComponent } from './config/billing-zones/billing-zone-detail/billing-zone-detail.component';
import { BillingApiClient } from 'app/common/billing-api-client.service';
import { State } from 'app/state.service';
import { ShellModule } from 'app/shell/shell.module';
import { TaskModule } from 'app/task/task.module';

@NgModule({
    imports: [
        // Angular Modules
        BrowserModule,
        HttpModule,

        // App Modules
        AppRoutingModule,

        // Shell Modules
        ShellModule,
        TaskModule,
    ],
    exports: [
    ],
    declarations: [
        // App
        AppComponent,

        // Queue Feature
        QueueShellComponent,

        // Admin BillingZone Feature
        BillingZoneShellComponent,
        BillingZoneListComponent,
        BillingZoneDetailComponent,
    ],
    providers: [
        State,
        BillingApiClient,
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
