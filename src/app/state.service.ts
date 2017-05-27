import { BillingApiClient } from 'app/common/billing-api-client.service';
import { IBillingConfiguration } from 'app/model/billing-configuration';
import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
    configuration: IBillingConfiguration;

    constructor(
        private billingApiClient: BillingApiClient
    ) {}

    init() {
        this.billingApiClient
            .getConfiguration()
            .subscribe(x => this.configuration = x);
    }
}
