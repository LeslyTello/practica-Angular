import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { UsernameValidators } from './username.validators';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form=new FormGroup({
    /*account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
       
      
      ], UsernameValidators.shouldBeUnique),
      password: new FormControl('',Validators.required)
    })*/
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
     
    
    ], UsernameValidators.shouldBeUnique),
    password: new FormControl('',Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  /*get username(){
    return this.form.get('account.username')
  }*/
}

/* Reactive Forms

 username: new FormControl('valor inicial',validator function Validators> mismas funciones qiue en tempalte driven static no puede ser accedio por la clase
 no se necesita instanciar
 ),

 form

 div formGroupName="account"
 inside 
 input formcontrolName="username"

*/