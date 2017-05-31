import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskShellComponent } from './task-shell.component';
import { TaskToolbarComponent } from './task-toolbar/task-toolbar.component';
import { TfPanelComponent } from './tf-panel/tf-panel.component';
import { TfFormComponent } from './tf-form/tf-form.component';
import { TfMergeGroupComponent } from './tf-merge-group/tf-merge-group.component';
import { TfMergeGroupInputComponent } from './tf-merge-group-input/tf-merge-group-input.component';
import { TfTaskComponent } from './tf-task/tf-task.component';
import { TfWorksetComponent } from './tf-workset/tf-workset.component';
import { TfPatientComponent } from './tf-patient/tf-patient.component';
import { TfAddressComponent } from './tf-address/tf-address.component';
import { TfTransportComponent } from './tf-transport/tf-transport.component';
import { TfTransportDetailComponent } from './tf-transport-detail/tf-transport-detail.component';
import { TfLocationComponent } from './tf-location/tf-location.component';
import { TfHipaaComponent } from './tf-hipaa/tf-hipaa.component';
import { TaskShellResolve } from './shell-resolve.service';

@NgModule({
    imports: [
        // TaskRoutingModule
        BrowserModule,
    ],
    exports: [
    ],
    declarations: [
        TaskShellComponent,
        TaskToolbarComponent,
        TfPanelComponent,
        TfFormComponent,
        TfMergeGroupComponent,
        TfMergeGroupInputComponent,
        TfPanelComponent,
        TfTaskComponent,
        TfWorksetComponent,
        TfPatientComponent,
        TfAddressComponent,
        TfTransportComponent,
        TfTransportDetailComponent,
        TfLocationComponent,
        TfHipaaComponent,

    ],
    providers: [
        TaskShellResolve
    ],
})
export class TaskModule { }
