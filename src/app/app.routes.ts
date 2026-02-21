import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalog/catalogo.component';

export const routes: Routes = [
    {   path: '', component: CatalogoComponent  },
    {   path: '**', redirectTo: ''},
];
