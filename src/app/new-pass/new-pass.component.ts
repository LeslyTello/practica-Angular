import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent  {

form= new FormGroup({
  oldPassword: new FormControl('',Validators.required, PasswordValidators.verificarOldPassword),
  newPassword: new FormControl('', Validators.required),
  repeatPassword: new FormControl('',Validators.required)
},{validators:PasswordValidators.samePassword})
    
get oldPassword(){
  return this.form.get('oldPassword')
}

get newPassword(){
  return this.form.get('newPassword')
}

get repeatPassword(){
  return this.form.get('repeatPassword')
  
}
  


}
