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

  onFavoriteChanged(isFavorite:{newValue:boolean}){
    console.log('Favorite changed ', isFavorite)
  }



}
