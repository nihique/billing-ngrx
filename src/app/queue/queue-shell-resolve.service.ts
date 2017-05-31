import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { State } from 'app/state.service';
import { Injectable } from '@angular/core';

@Injectable()
export class QueueShellResolve implements Resolve<State> {
    constructor(
        private state: State,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.state.resolveQueueShell();
    }
}
