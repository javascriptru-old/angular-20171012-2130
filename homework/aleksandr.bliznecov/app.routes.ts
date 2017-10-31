import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailListComponent, MailListResolveService } from './mail-list';
import { MailComponent, } from './mail/mail.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'mails',
        component: MailBoxComponent,
        children: [
            {
                path: ':mailBoxItem',
                component: MailListComponent,
                resolve: {
                    mails: MailListResolveService
                }
            },
            {
                path: ':mailBoxItem/:mailId',
                component: MailComponent,
                resolve: {
                    mails: MailListResolveService
                }
            }
        ]
    },

];
