import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ShellRoutingModule } from 'app/shell/shell-routing.module';
import { ShellResolve } from 'app/shell/shell-resolve.service';

@NgModule({
    imports: [
        ShellRoutingModule
    ],
    exports: [
    ],
    declarations: [
        ShellComponent,
        BreadcrumbComponent,
        MainToolbarComponent,
    ],
    providers: [
        ShellResolve
    ],
})
export class ShellModule { }
