import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  categorias=[{
    id:1,
    nombre:'Teorico'
  },{
    id:2,
    nombre:'Practico'
  },{
    id:3,
    nombre:'Otro'
  }]
  constructor() { }

  ngOnInit(): void {
  }

  guardar(f){
    console.log(f.value)
  }

}
