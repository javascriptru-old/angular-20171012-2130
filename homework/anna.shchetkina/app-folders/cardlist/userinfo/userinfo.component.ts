import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserproviderService } from '../../../userprovider.service';
import { TUserCard } from '../cardlist.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  private userId: string;
  private userInfo: TUserCard;

  constructor(private route: ActivatedRoute, private _userproviderService: UserproviderService) { }

  private getUserInfo(id) {
    this.userId = id;

    let userCards = new Array<TUserCard>();
    this._userproviderService.getUsers().subscribe(
      (data: any) => {
        let info: Array<any> = data.UserList.filter((item) => item.Id == this.userId );
        if (info.length > 0) {
          this.userInfo = {
            UserID : info[0].Id,
            UserName : info[0].Name,
            BirthDate : info[0].BD
          }
        }
      },
      (err: HttpErrorResponse) => this._userproviderService.handleError(err)
    );

    //this.message = this.mailsvc.GetMessage(this.messageId);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.getUserInfo(params.id));
  }

}
