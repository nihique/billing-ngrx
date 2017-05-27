import { BillingApiClient } from 'app/common/billing-api-client.service';
import { IBillingConfiguration } from 'app/model/billing-configuration';
import { Injectable } from '@angular/core';
import { IWorkflow } from 'app/model/worfklow';

@Injectable()
export class StateService {
    configuration: IBillingConfiguration;
    workflow: IWorkflow;

    constructor(
        private billingApiClient: BillingApiClient
    ) {}

    init() {
        this.billingApiClient
            .getConfiguration()
            .subscribe(x => this.configuration = x);

        this.billingApiClient
            .getDefaultWorkflow()
            .subscribe(x => this.workflow = x);
    }
}
