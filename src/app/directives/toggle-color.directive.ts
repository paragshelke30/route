import {
  OnInit, Directive,
  HostListener, ElementRef, Input
} from '@angular/core';

@Directive({
  selector: '[appToggleColor]'
})
export class ToggleColorDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input('appToggleColor') appToggleColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(this.appToggleColor);
  }

  ngOnInit() {
    this.changeColor(this.appToggleColor);
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color || 'red';
  }

}
