import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
    // imports: [
    //     RouterOutlet
    // ]
})
export class App {
    protected readonly title = signal('pale-blue-games');
}
