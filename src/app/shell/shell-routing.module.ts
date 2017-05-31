import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from 'app/shell/shell.component';
import { ShellResolve } from 'app/shell/shell-resolve.service';
import { QueueShellComponent } from 'app/queue/queue-shell.component';
import { QueueShellResolve } from 'app/queue/queue-shell-resolve.service';
import { TaskShellComponent } from 'app/task/task-shell.component';
import { TaskShellResolve } from 'app/task/shell-resolve.service';
import { BillingZoneShellComponent } from 'app/config/billing-zones/billing-zone-shell/billing-zone-shell.component';

const routes: Routes = [
    {
        path: 'shell',
        component: ShellComponent,
        resolve: { state: ShellResolve },
        children: [
            {
                path: 'queue',
                component: QueueShellComponent,
                resolve: { state: QueueShellResolve },
            },
            {
                path: 'task/:taskId',
                component: TaskShellComponent,
                resolve: { state: TaskShellResolve }
            },
            {
                path: 'config/billing-zones',
                component: BillingZoneShellComponent,
            },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        QueueShellResolve,
        TaskShellResolve,
    ]
})

export class ShellRoutingModule { }

export const routedComponents = [ShellComponent];
