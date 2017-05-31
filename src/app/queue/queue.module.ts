import { NgModule } from '@angular/core';

import { QueueShellResolve } from './queue-shell-resolve.service';
import { QueueShellComponent } from './queue-shell.component';

@NgModule({
    imports: [
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
