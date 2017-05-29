import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueShellComponent } from 'app/queue/queue-shell.component';
import { TaskShellComponent } from 'app/task/task-shell.component';
import { BillingZoneShellComponent } from 'app/config/billing-zones/billing-zone-shell/billing-zone-shell.component';
import { QueueShellResolve } from 'app/queue/queue-shell-resolve.service';
import { ShellComponent } from 'app/shell/shell.component';
import { ShellResolve } from 'app/shell/shell-resolve.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'shell/queue',
        pathMatch: 'full'
    },
    {
        path: 'shell',
        component: ShellComponent,
        resolve: {
            state: ShellResolve
        },
        children: [
            {
                path: 'queue',
                component: QueueShellComponent,
                resolve: {
                    state: QueueShellResolve
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
        ],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        ShellResolve,
        QueueShellResolve,
    ]
})
export class AppRoutingModule { }
