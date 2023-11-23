import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  public constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
