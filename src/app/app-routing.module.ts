import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueuesComponent } from 'app/queues/queues.component';
import { TaskComponent } from 'app/task/task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'queues',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
