import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pbg-root',
    templateUrl: './app.html',
    imports: [
        RouterOutlet
    ]
})
export class App implements OnInit {
    private _iconLib = inject(FaIconLibrary);

    public ngOnInit(): void {
        this._iconLib.addIcons(faPalette);
    }
}
