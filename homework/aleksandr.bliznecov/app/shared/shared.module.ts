import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidators } from './validators.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [CustomValidators],
})
export class SharedModule {}
