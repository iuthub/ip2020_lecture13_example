import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private elRef:ElementRef, private renderer: Renderer2) { 
  	// this.elRef.nativeElement.style.backgroundColor = 'yellow';
  	// this.renderer.setStyle(this.elRef, 'background-color', 'yellow');
  	// this.bgColor = 'yellow';
  }

  @HostListener('mouseenter') mouseenter(ev:Event) {
  	this.bgColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(ev:Event) {
  	this.bgColor = 'transparent';
  }

}
