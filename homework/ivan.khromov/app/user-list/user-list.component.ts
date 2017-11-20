import { Router, ActivatedRoute } from '@angular/router';
import {Component, Input, OnInit, Output} from '@angular/core';

import {UsersService} from '../services/users.service';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import * as ICustom from '../app.definitions';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

    private userList: ICustom.IUserModel[];
    private _selectedUser: ICustom.IUserModel;
    nameControl: FormControl;
    formGroupAddUser: FormGroup;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _userService: UsersService) {

        this._userService.getUsers().subscribe((usersArr) => {
            this.userList = usersArr;
            console.log('getUsersAppComp: ', usersArr);

            this._route.params.subscribe((prms) => {
                if (prms['contactId']) {
                    this._selectedUser = this.userList[prms['contactId']];
                    console.log('prms ', prms);
                }
            });
        });
    }
    ngOnInit() {

        // this.nameControl.statusChanges.subscribe((st) => console.log(st));
        // this.formGroupAddUser = new FormGroup({
        //     firstName: new FormControl('', [Validators.minLength(2)]),
        //     lastName: new FormControl('', [Validators.minLength(2)]),
        //     sex: new FormControl('', [Validators.required]),
        //     birthDate: new FormControl('', [validatorCheckAge]),
        //     email: new FormControl('', [Validators.email])
        // });

        this.formGroupAddUser = this._formBuilder.group({
            firstName: ['',  [Validators.minLength(2)]],
            lastName: ['', [Validators.minLength(2)]],
            sex: ['', [Validators.required]],
            birthDate: ['', [validatorCheckAge]],
            email: ['', [Validators.email]]
        });
    }

    addUser() {
        if (this.formGroupAddUser.status === 'VALID') {
           const values = this.formGroupAddUser.value;
           const newUser: ICustom.IUserModel = {
                rowUser: {
                    fullName: values['firstName'] + ' ' +  values['lastName'],
                    email: values['email'],
                    avatarUrl: 'http://24aut.ru/sites/default/files/default_images/nopicture_1.jpg',
                    address: 'Common info: sex: ' +  values['sex'],
                    birthdate: new Date()
                }
           };

           this._userService.createUser(newUser).subscribe(res => {
                this.userList.push(newUser);
           });

           console.log('New user payload: ', newUser);
        } else {
            console.log('Can\'t add user, formGroupAddUser.status: ', this.formGroupAddUser.status);
        }
    }

    deleteUser(id: string) {
        this._userService.deleteUser(id).subscribe(res => {
            this.userList = this.userList.filter((user, i, arr) =>  user['rowUser']._id !== id );
        });
    }
    selectUser(u: ICustom.IUser, idx?: number) {
        // u.selected = !u.selected;
        // console.log(u.selected);
        console.log(u['rowUser']);
        this._router.navigate([`${idx}`], {relativeTo: this._route});
    }


}

function validatorCheckAge(formControl: FormControl) {
    const errMsg = 'Please, use specified fmt: YYYY-MM-DD';
    const res = formControl.value.match(/(19|20)\d\d[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])/);
    console.log(res);
    if (!res || res.length === 0) {
        return { myValidatorOfLength: { message: errMsg}};
    }

    return null;
}


