import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MailRootComponent } from './mail-root.component';
import { MailListComponent } from '../mail-list/mail-list.component';
import { MailListItemComponent } from '../mail-list-item/mail-list-item.component';
import { MailDetailComponent } from '../mail-detail/mail-detail.component';
import { MailContactsComponent } from '../mail-contacts/mail-contacts.component';
import { UserListComponent } from '../mail-contacts/user/user-list/user-list.component';
import { UserCardComponent } from '../mail-contacts/user/user-card/user-card.component';
import { MailService } from '../services/mail.service';
import { LetterService } from '../services/letter.service';
import { UserService } from '../mail-contacts/user/services/user.service';
import { InitialsPipe } from '../../pipes/initials.pipe';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'box',
            component: MailRootComponent,
            children: [
              {
                path: ':boxId',
                component: MailListComponent
              },
              {
                path: ':boxId/:letterId',
                component: MailDetailComponent
              }
            ]
          },
          {
            path: 'contacts',
            component: MailContactsComponent
          }
        ]
      },
    ])
  ],
  declarations: [
    MailRootComponent,
    MailListComponent,
    MailDetailComponent,
    MailListItemComponent,
    MailContactsComponent,
    UserListComponent,
    UserCardComponent,
    InitialsPipe,
    MenuComponent
  ],
  providers: [
    UserService,
    MailService,
    LetterService
  ]
})
export class MailRootModule { }
