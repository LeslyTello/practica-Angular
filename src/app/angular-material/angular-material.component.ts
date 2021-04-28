import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {

  colors=[
    {id:1,name:'red'},
    {id:2,name:'blue'}
  ]

  minDate= new Date(2021,28,4)
  maxDate= new Date(2021,31,4)
  isChecked=true
  constructor() { }

  ngOnInit(): void {
  }


  selectCategory(category){
    this.colors.filter(c=>{
      c!=category
    }).forEach(c=>c['selected']=false )

    category.selected=! category.selected
  }
}
