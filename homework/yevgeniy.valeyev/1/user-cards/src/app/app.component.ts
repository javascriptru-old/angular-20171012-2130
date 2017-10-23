import { Component } from '@angular/core';
import { USERS } from './users';
import { User, UserSelectionData } from './interfaces';
import * as utils from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: User[] = USERS;
  selectedUserIds: number[] = [];

  deleteUser (user: UserSelectionData) {
    const index = this.users.findIndex(({id}) => user.id === id);
    if (index >= 0) {
      this.users = utils.removeItemFromList(this.users, index);;
    }
  }

  isUserInSelection ({id}: UserSelectionData) {
    return this.selectedUserIds.indexOf(id) >= 0;
  }

  addUserToSelection (user: UserSelectionData) {
    if (!this.isUserInSelection(user)) {
      this.selectedUserIds = [...this.selectedUserIds, user.id]
    }
  }

  removeUserFromSelection (user: UserSelectionData) {
    if (this.isUserInSelection(user)) {
      const index = this.selectedUserIds.indexOf(user.id)
      this.selectedUserIds = utils.removeItemFromList(this.selectedUserIds, index);
    }
  }
}
