import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
	selector: '[addAttribute]'
})
export class AddAttributeDirective implements OnInit {
	@Input() addAttribute;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		// Accessing the native element directly:
		// this.elementRef.nativeElement.setAttribute(this.addAttribute, '');

		// Accessing using the Renderer2 class:
		// this.renderer.setAttribute(elementRef, attribute, value);
		this.renderer.setAttribute(this.elementRef.nativeElement, this.addAttribute, '');
	}
}
