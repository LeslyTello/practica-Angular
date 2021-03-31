import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-author',
  templateUrl:'./author.component.html' ,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  autores;
  titulo="Author"
  constructor(service:AutoresService) {
      this.autores=service.getAuthors()
   }

  ngOnInit(): void {
  }

}
