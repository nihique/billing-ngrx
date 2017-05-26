import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueuesComponent } from './queues/queues.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskToolbarComponent } from './task/task-toolbar/task-toolbar.component';
import { BillingZoneShellComponent } from './config/billing-zones/billing-zone-shell/billing-zone-shell.component';
import { BillingZoneListComponent } from './config/billing-zones/billing-zone-list/billing-zone-list.component';
import { BillingZoneDetailComponent } from './config/billing-zones/billing-zone-detail/billing-zone-detail.component';
import { BreadcrumbComponent } from "app/common/breadcrumb/breadcrumb.component";
import { MainToolbarComponent } from "app/common/main-toolbar/main-toolbar.component";

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    QueuesComponent,
    TaskComponent,
    TaskDetailComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
