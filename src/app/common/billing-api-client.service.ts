import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IBillingConfiguration } from 'app/model/billing-configuration';
import { IWorkflow } from 'app/model/worfklow';

@Injectable()
export class BillingApiClient {
    constructor(
        private http: Http,
    ) {}

    getConfiguration(): Observable<IBillingConfiguration> {
        return this.http
            .get(this.normalizeUrl('configuration/get'))
            .map(x => x.json())
            .catch(this.handleError);
    }

    getDefaultWorkflow(): Observable<IWorkflow> {
        return this.http
            .get(this.normalizeUrl('workflows/get'))
            .map(x => x.json)
            .catch(this.handleError);
    }

    private normalizeUrl(url: string): string {
        return `/BillingModule/${url}`;
    }

    private handleError(error: Response | any): ErrorObservable {
        let msg: string;

        if (error instanceof Response) {
            const body: any = error.json() || {};
            const errorString = body.error || JSON.stringify(body);
            msg = `${error.status} - ${error.statusText || ''} ${errorString}`;
        } else {
            msg = error.message ? error.message : error.toString();
        }

        console.error(msg);

        return Observable.throw(msg);
    }
}
