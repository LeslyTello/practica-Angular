import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods=[{
    id:1,
    name:'Email'

  },{
    id:2,
    name:'Home'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  log(x){
    console.log(x)
  }

  submit(f){
    console.log(f.value)
  }

}


/*
Form Control? verifia que se presiona, texto, dirty value, touched, error, valid solo un input
Usa ngModel

Form Group> el grupo de controles en un formulario Varios inputs
Entire form, ngForm aplica auitomaticamente y crea un form group object. Track state of all elementes. Use por handle por submit
ngModelGroup> Con varios subgrupos, crea un form group


Crear controles por:
1. directivas template-driven. Simple forms y simple avlidation, less code.
2. Code Instancias de control group reactive mas control y es bueno para complex forms. Unit testable

ngModelGroup directives

DISABLING THE SUBMIT BUTTON
<button class="btn btn-primary" [disabled]="!f.valid">Guardar</button>

WORKING WITH CHECK BOX
  <option *ngFor="let method of contactMethods" [ngValue]="method">{{method.name}}</option>
    <option *ngFor="let method of contactMethods" [value]="method.id">{{method.name}}</option>
*/