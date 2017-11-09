import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'mails',
        loadChildren: './mail/mail.module#MailModule'
    },
    {
        path: 'book',
        loadChildren: './adress-book/adress-book.module#AdressBookModule'
    },
];
