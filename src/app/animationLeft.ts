import { transition, trigger, state, animate, style } from '@angular/animations';

export const animation= trigger('animation',[
    
    transition(':enter',[
      style({ transform:'translateX(-10px)'}),
      animate(2000)
    ]),

    transition(':leave',[
        style({transform: 'translateX(-100%)'}) //outside 
    ])

  
  ])