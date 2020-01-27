import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfcDirectiveDirective } from './directives/rfc-directive.directive';
import { PasswordValidationDirective } from './directives/validations/password-validation.directive';
import { ListValidationDirective } from './directives/validations/list-validation.directive';



@NgModule({
  declarations: [
    RfcDirectiveDirective,
    PasswordValidationDirective,
    ListValidationDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [RfcDirectiveDirective, ListValidationDirective]
})
export class SharedModule { }
