import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {

    let id=this.route.snapshot.paramMap.get('id')
    console.log(id)

      /*this.route.paramMap.subscribe((parametros)=>{
        
        let id=+parametros.get('id')
        console.log(id)
      })*/
  }



}

/*PARA LEER DATOS DESDE WEB PARAMETROS */

/* PORQUE SON OBSERVABLES LOS PARAMETROS

Funcionan como life hock, on init, y on destroy
Destruye el primer comeponente y crea el siguiente


Si estamos seguros que va asegresar
let id=this.route.snapshot.paramMap.get('id') //pbject


QUERY PARAMETERS

[queryParms]="{page:1, order:125}"

this.route.queryParmMap.subscribe()---mas usado 
let page

SUBSCRIBING T O MUKTIPLE PARAMETROS

Observable> data sincronizada que esta en constante actualizacion
Combinar los observables en uno solo y ver este observable
import Observable
import rxjs/add/observable/combineLatest

let obs= Observable.combineLatest([
  this.route.paramMap,
  this.route,queryMap
]);

obs.subscribe((respuestaFinal)=>{
  let id=respuesta[0].get('id');
  let page= respuesta[1].get('page')

})

this.service.getFollower({id:id, page:page})


***SWITCH 

Observable: any coleccion
usando map: observable de any

Response---
    map
        --- Any

import rxjsadd/operador/map
/switchmap

  let obs= Observable.combineLatest([
  this.route.paramMap,
  this.route,queryMap
]).map/ switchMap(combined=>{

}).subsribe

obs.subscribe((respuestaFinal)=>{
  let id=respuesta[0].get('id');
  let page= respuesta[1].get('page')

})


PROGRAMMATIC NAVIGATION

*/

/*constructor(private router:Router) { }
  this.router.navigate(['/followers],{
    queryParams:{page:1,order:'newest'}
  })
*/

