import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { QueueShellResolve } from './queue-shell-resolve.service';
import { QueueShellComponent } from './queue-shell.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
    ],
    exports: [
    ],
    declarations: [
        QueueShellComponent,
    ],
    providers: [
        QueueShellResolve
    ],
})
export class QueueModule { }
