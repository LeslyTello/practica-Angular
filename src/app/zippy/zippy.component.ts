import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  isExpanded:boolean=true
  @Input('title') title:string

  onClick(){
    this.isExpanded=!this.isExpanded
  }

}
