import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  @Input('isFavorite') isFavorite:boolean;
  @Output('change') click= new EventEmitter(); //Este es el nombre del evento en el modulo suscrito

  title:string;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarImagen(){
    this.isFavorite= !this.isFavorite
    this.click.emit({ newValue:this.isFavorite});
  }

}
