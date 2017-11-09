import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailBoxComponent } from './mail-box/mail-box.component';
import {
    MailListComponent,
    MailListResolveService,
    MailListService
} from './mail-list';
import { MailComponent } from './mail/mail.component';
import { routes } from './mail.routes';

@NgModule({
    declarations: [
        MailBoxComponent,
        MailListComponent,
        MailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    providers: [
        MailListResolveService,
        MailListService
    ],
})
export class MailModule { }