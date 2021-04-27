import { transition, trigger, state, animate, style } from '@angular/animations';

export const fade= trigger('fade',[
    state('void',style({opacity:0})),
    transition('void=>*',[ //:enter, :leave
      style({ opacity:0}),
      animate(2000)
    ])

  
  ])