import { routes } from './login.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent }  from './login/login.component';

@NgModule({
    declarations: [ 
        LoginComponent
     ],
    imports: [ 
        RouterModule.forChild(routes),
        CommonModule
     ],
    providers: [],
    bootstrap: [ LoginComponent ]
})

export class LoginModule {}