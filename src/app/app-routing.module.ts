import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from 'app/queue/queue.component';
import { TaskShellComponent } from 'app/task/task-shell.component';
import { BillingZoneShellComponent } from 'app/config/billing-zones/billing-zone-shell/billing-zone-shell.component';
import { QueueResolver } from 'app/queue/queue-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'queues',
    pathMatch: 'full'
  },
  {
    path: 'queue',
    component: QueueComponent,
    resolve: {
        queue: QueueResolver
    },
  },
  {
    path: 'task',
    component: TaskShellComponent,
  },
  {
    path: 'config/billing-zones',
    component: BillingZoneShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
      QueueResolver,
  ]
})
export class AppRoutingModule { }
