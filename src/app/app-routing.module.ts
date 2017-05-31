import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueShellComponent } from 'app/queue/queue-shell.component';
import { TaskShellComponent } from 'app/task/task-shell.component';
import { BillingZoneShellComponent } from 'app/config/billing-zones/billing-zone-shell/billing-zone-shell.component';
import { QueueShellResolve } from 'app/queue/queue-shell-resolve.service';
import { ShellComponent } from 'app/shell/shell.component';
import { TaskShellResolve } from 'app/task/shell-resolve.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'shell/queue',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        QueueShellResolve,
        TaskShellResolve
    ]
})
export class AppRoutingModule { }
