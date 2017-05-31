import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingApiClient } from './common/billing-api-client.service';
import { State } from './state.service';
import { ShellModule } from './shell/shell.module';
import { TaskModule } from './task/task.module';
import { QueueModule } from './queue/queue.module';
import { BillingZonesModule } from './config/billing-zones/billing-zones.module';

@NgModule({
    imports: [
        // Angular Modules
        BrowserModule,
        HttpModule,

        // App Modules
        AppRoutingModule,

        // Shell Modules
        ShellModule,
        QueueModule,
        TaskModule,
        BillingZonesModule,
    ],
    exports: [
    ],
    declarations: [
        AppComponent,
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
