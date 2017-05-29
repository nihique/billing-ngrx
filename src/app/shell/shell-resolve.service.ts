import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { State } from 'app/state.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ShellResolve implements Resolve<State> {
    constructor(
        private state: State,
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.state.refreshConfiguration();
    }
}
