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
    constructor(
    ) {}

    ngOnInit(): void {
    }
}
