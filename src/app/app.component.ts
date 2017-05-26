import { Component, OnInit } from '@angular/core';
import { BillingApiClient } from 'app/common/billing-api-client.service';
import { Observable } from 'rxjs/Observable';
import { IBillingConfiguration } from 'app/model/billing-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    configuration: IBillingConfiguration;
    title = 'app works!';

    constructor(
        private billingApiClient: BillingApiClient,
    ) {
    }

    ngOnInit(): void {
        this.configuration = this.billingApiClient
            .getConfiguration()
            .subscribe(x => this.configuration = x);
    }
}
