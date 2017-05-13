import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueuesComponent } from 'app/queues/queues.component';
import { TaskComponent } from 'app/task/task.component';
import { BillingZoneShellComponent } from "app/config/billing-zones/billing-zone-shell/billing-zone-shell.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'config/billing-zones',
    pathMatch: 'full'
  },
  {
    path: 'queues',
    component: QueuesComponent
  },
  {
    path: 'task',
    component: TaskComponent,
  },
  {
    path: 'config/billing-zones',
    component: BillingZoneShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
