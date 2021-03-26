import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  template: `
  <h2>{{total+' '+ title}}</h2>
  <ul>
    <li *ngFor="let course of cursos">
      {{course}}
    </li>
  </ul>
  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title="Lista de cursos";
  cursos;
  total;
  constructor(service:CoursesService) { 
    

      this.cursos=service.getCourses()
      this.total=service.contar()

  }

  ngOnInit(): void {
  }

  

//Logic the service> Not recommended Logic calling an HTTP service. Se repite cada vez , redundancia
//Crear un servicio en otro y se lo consumo

}
//``break the html en partes peque;as

//Inyeccion de dependencias
/*Para servicios
Crear el archivo de servicios
Colocar en providers
*/


/*
PROPERTY BINDING [src]="" instead {{}}. Properties of DOM 
ATTRIBUTE BINDING [attr.colspan]=''

*/

/*
DOM> Tree of object in memoty
HTML> DOM in text atributos en html se traduce en dom pero con excepciones.
colspan no tiene representancion en DOM
*/