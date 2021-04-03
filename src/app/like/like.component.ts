import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('like') isActive:boolean;
  @Input('likesCount') total:number;


  

  cambiarLike(){
    this.total +=(this.isActive)? -1: 1;
    this.isActive=!this.isActive
  }

  

}
