import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  isFavorite:boolean;
  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarImagen(){
    this.isFavorite= !this.isFavorite
  }

}
