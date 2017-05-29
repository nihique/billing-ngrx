import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { State } from 'app/state.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskShellResolve implements Resolve<State> {
    constructor(
        private state: State,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const taskId = route.params.taskId;
        return this.state.resolveTaskShell(taskId);
    }
}
