import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.addEventListener('mouseenter', () => {
      console.log(elementRef)
    })
  }
@HostBinding('style.backgroundcolor')

  @HostListener('mouseenter')
  mouse() {
 
  }



}
