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



}
