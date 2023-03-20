import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @HostListener('click', ['$event'])
  handleClick($event): void {
      console.log('a message');
  }

  constructor() { }

}