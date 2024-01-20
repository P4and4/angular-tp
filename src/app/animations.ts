import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ])
]);

export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0.95)', opacity: 0 }),
    animate('300ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
  ])
]);
