import { Component, OnInit } from '@angular/core';
import { BillingApiClient } from 'app/common/billing-api-client.service';
import { Observable } from 'rxjs/Observable';
import { IBillingConfiguration } from 'app/model/billing-configuration';
import { State } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    configuration: IBillingConfiguration;

    constructor(
        private state: State,
    ) {}

    ngOnInit(): void {
        this.state.init();
    }
}
