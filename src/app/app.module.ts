import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueShellComponent } from './queue/queue-shell.component';
import { TaskToolbarComponent } from './task/task-toolbar/task-toolbar.component';
import { BillingZoneShellComponent } from './config/billing-zones/billing-zone-shell/billing-zone-shell.component';
import { BillingZoneListComponent } from './config/billing-zones/billing-zone-list/billing-zone-list.component';
import { BillingZoneDetailComponent } from './config/billing-zones/billing-zone-detail/billing-zone-detail.component';
import { BreadcrumbComponent } from 'app/common/breadcrumb/breadcrumb.component';
import { MainToolbarComponent } from 'app/common/main-toolbar/main-toolbar.component';
import { BillingApiClient } from 'app/common/billing-api-client.service';
import { TaskShellComponent } from 'app/task/task-shell.component';
import { TfTaskComponent } from 'app/task/tf-task/tf-task.component';
import { State } from 'app/state.service';
import { ShellComponent } from 'app/shell/shell.component';
import { TfPanelComponent } from 'app/task/tf-panel/tf-panel.component';
import { TfFormComponent } from 'app/task/tf-form/tf-form.component';
import { TfMergeGroupComponent } from 'app/task/tf-merge-group/tf-merge-group.component';
import { TfMergeGroupInputComponent } from 'app/task/tf-merge-group-input/tf-merge-group-input.component';
import { TfPatientComponent } from 'app/task/tf-patient/tf-patient.component';
import { TfAddressComponent } from 'app/task/tf-address/tf-address.component';

@NgModule({
    declarations: [
        // App
        AppComponent,

        // Shell
        ShellComponent,
        BreadcrumbComponent,

        // Queue Feature
        QueueShellComponent,

        // Task Feature
        TaskShellComponent,
        TaskToolbarComponent,
        TfTaskComponent,
        TfPanelComponent,
        TfFormComponent,
        TfMergeGroupComponent,
        TfMergeGroupInputComponent,
        TfPanelComponent,
        TfPatientComponent,
        TfAddressComponent,

        // Admin BillingZone Feature
        BillingZoneShellComponent,
        BillingZoneListComponent,
        BillingZoneDetailComponent,
        MainToolbarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        State,
        BillingApiClient,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
