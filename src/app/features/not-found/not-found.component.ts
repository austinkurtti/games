import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxbButtonDirective, NgxbButtonType } from '@austinkurtti/ngx-burst/button';

@Component({
    selector: 'pbg-not-found',
    styleUrl: './not-found.component.scss',
    templateUrl: './not-found.component.html',
    host: {
        'class': 'full-page'
    },
    imports: [
        NgxbButtonDirective,
        RouterLink
    ]
})
export class PbgNotFoundComponent {
    public buttonType = NgxbButtonType.primary;
}
