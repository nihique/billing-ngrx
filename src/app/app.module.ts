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

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BreadcrumbComponent,
    QueueShellComponent,
    TaskShellComponent,
    TfTaskComponent,
    TaskToolbarComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
