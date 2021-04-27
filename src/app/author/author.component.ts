import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { CoursesService } from '../courses.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { empty } from 'rxjs';
import { transition, trigger, state, animate, style } from '@angular/animations';
import { fade } from '../animation';
import { animation } from '../animationLeft';

@Component({
  selector: 'app-author',
  templateUrl:'./author.component.html' ,
  styleUrls: ['./author.component.css'],
  animations:[
   animation
  ]
})
export class AuthorComponent implements OnInit {

  arregloFirebase = []
  autores;
  titulo="Author"
  constructor(service:AutoresService, private firestore: AngularFirestore) {
      this.autores=service.getAuthors()
    
      
   }

  ngOnInit(): void {
    this.arregloFirebase=[]
    this.firestore.collection('taller').snapshotChanges().subscribe((resultado)=>{
      resultado.forEach((valorActual)=>{
        console.log(valorActual.payload.doc.data())
          this.arregloFirebase.push({
            id:valorActual.payload.doc.id,
            data:valorActual.payload.doc.data()
          })


      })
     
    })

    console.log('Arreglo final', this.arregloFirebase)
  }

  public getCats() {
    
    return this.firestore.collection('cats').snapshotChanges();
  }

  guardar(form){
    console.log(form.value)
    this.firestore.collection('taller').add(form.value)
    .then((respuesta)=>{
      console.log('Yeih!! esta creado --', respuesta)
    } )

 
  }

}
