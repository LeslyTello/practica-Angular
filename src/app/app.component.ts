import { Component } from '@angular/core';


interface FavoriteChangedEventArgs{
  newValue:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  courses=[{
    id:1,
    name:"Course1"
  },{
    id:2,
    name:"curso2"
  },{
    id:3,
    name:"curso 3"
  }]
  post={
    isFavorite:true,
    title:'Hola'
  }


  tweet={
    body:"Esto es un teet",
    likesCount:10,
    like:true
  }

  onFavoriteChanged(isFavorite:{newValue:boolean}){
    console.log('Favorite changed ', isFavorite)
  }


  onAdd(){
    this.courses.push({id:4,name:"Cursos4"})
  }


  onRemove(course){
    let index=this.courses.indexOf(course)
    this.courses.splice(index,1)
  }

  
}
