import { Routes } from '@angular/router';
import { PbgNotFoundComponent } from './features/not-found/not-found.component';
import { PbgLibraryComponent } from './games/library.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        title: 'Pale Blue Games',
        component: PbgLibraryComponent
    },
    // {
    //     path: 'sudoku',
    //     title: 'Sudoku',
    //     // component: SudokuComponent
    // },
    // {
    //     path: 'warships',
    //     title: 'Warships',
    //     // component: WarshipsComponent
    // },
    {
        path: '**',
        title: '404 - Not Found',
        component: PbgNotFoundComponent
    }
];
