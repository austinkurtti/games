import { Component } from '@angular/core';
import { NgxbButtonDirective, NgxbButtonType } from '@austinkurtti/ngx-burst/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'pbg-library',
    styleUrl: './library.component.scss',
    templateUrl: './library.component.html',
    imports: [
        FaIconComponent,
        NgxbButtonDirective
    ]
})
export class PbgLibraryComponent {
    public themeButtonType = NgxbButtonType.subtle;
}
