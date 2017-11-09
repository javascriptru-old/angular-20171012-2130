import { Routes } from '@angular/router';
import { AdressComponent } from './adress/adress.component';
import { AdressBookComponent } from './adress-book/adress-book.component';
import { AdressBookAddComponent } from './adress-book-add/adress-book-add.component';
import { AdresResolveService } from './adress/adress.resolve';

export const routes: Routes = [
    {
        path: '',
        component: AdressBookComponent
    },
    {
        path: 'addAdres',
        component: AdressBookAddComponent
    },
    {
        path: ':p1',
        component: AdressComponent,
        resolve: {
            adres: AdresResolveService
        }
    },
];
