import { AfterViewInit, Component, inject, OnDestroy, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxbButtonDirective, NgxbButtonType } from '@austinkurtti/ngx-burst/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

class Game {
    public title = '';
    public route = '';
    public img = '';
}

@Component({
    selector: 'pbg-library',
    styleUrl: './library.component.scss',
    templateUrl: './library.component.html',
    imports: [
        FaIconComponent,
        NgxbButtonDirective,
        RouterLink
    ]
})
export class PbgLibraryComponent implements AfterViewInit, OnDestroy {
    public themeButtonType = NgxbButtonType.subtle;
    public games: Game[] = [
        { title: 'Sudoku', route: 'sudoku', img: 'sudoku.png' },
        { title: 'Warships', route: 'warships', img: 'warships.png' }
    ];

    private _renderer = inject(Renderer2);

    private _scrolled = false;
    private _unlistenScroll: (() => void) | null = null;

    public ngAfterViewInit(): void {
        this._unlistenScroll = this._renderer.listen('window', 'scroll', () => {
            console.log('scroll listen');
            const header = document.getElementsByTagName('header')[0];
            if (!this._scrolled && window.scrollY > 0) {
                this._scrolled = true;
                this._renderer.addClass(header, 'scrolling');
            } else if (this._scrolled && window.scrollY === 0) {
                this._scrolled = false;
                this._renderer.removeClass(header, 'scrolling');
            }
        });
    }

    public ngOnDestroy(): void {
        this._unlistenScroll?.();
    }
}
