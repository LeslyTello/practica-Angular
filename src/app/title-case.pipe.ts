import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: any): any {
    if(!value) return null;

    let prepositions=[
      'of',
      'the'
    ];

    let words=value.split(' ');
    for (var index=0; index < words.length; index++){
        if(index>0 && prepositions.includes(words[index])){
          words[index]= words[index].toLowerCase()
        }else{
          words[index]=words[index].substr(0,1).toUpperCase()+ words[index].substr(1).toLowerCase();
        }
    }

    return words.join(' ');
  }


  private isPreposition(word:string):boolean{
    let prepositions=[
      'of',
      'the'
    ]; 
   return  prepositions.includes(word)
    
  }
}
