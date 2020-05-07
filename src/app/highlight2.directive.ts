import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  	this.elRef.nativeElement.style.backgroundColor = 'green';
  	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	// this.bgColor = 'green';
  }

  // @HostListener('mouseenter') mouseenter(ev:Event) {
  // 	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  // 	this.bgColor = 'blue';
  // }

  // @HostListener('mouseleave') mouseleave(ev:Event) {
  // 	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  // 	this.bgColor = 'transparent';
  // }

}
