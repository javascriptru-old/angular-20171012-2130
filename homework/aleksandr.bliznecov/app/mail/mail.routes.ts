import { Routes} from '@angular/router';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailListComponent, MailListResolveService } from './mail-list';
import { MailComponent, } from './mail/mail.component';

export const routes: Routes = [
    {
        path: '',
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

