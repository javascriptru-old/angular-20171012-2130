import { AdresResolveService } from './adress/adress.resolve';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdressBookComponent } from './adress-book/adress-book.component';
import { AdressBookItemComponent } from './adress-book-item/adress-book-item.component';
import { AdressComponent } from './adress/adress.component';
import { AdressBookService } from './adress-book.service';
import { routes } from './adress-book.routes';
import { AdressBookAddComponent } from './adress-book-add/adress-book-add.component';

@NgModule({
    declarations: [
        AdressBookComponent,
        AdressBookItemComponent,
        AdressComponent,
        AdressBookAddComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [],
    providers: [
        AdressBookService,
        AdresResolveService
    ],
})
export class AdressBookModule { }