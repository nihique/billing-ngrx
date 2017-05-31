import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ShellResolve } from './shell-resolve.service';
import { QueueShellComponent } from '../queue/queue-shell.component';
import { QueueShellResolve } from '../queue/queue-shell-resolve.service';
import { TaskShellComponent } from '../task/task-shell.component';
import { TaskShellResolve } from '../task/shell-resolve.service';
import { BillingZonesShellComponent } from '../config/billing-zones/billing-zones-shell.component';

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
                component: BillingZonesShellComponent,
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
