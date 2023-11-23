import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') private isOpen: boolean = false;

  @HostListener('document:click', ['$event']) public toggleOpen(
    event: Event
  ): void {
    this.isOpen = this.elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  public constructor(private elementRef: ElementRef) {}
}
