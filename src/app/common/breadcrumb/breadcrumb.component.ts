import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
