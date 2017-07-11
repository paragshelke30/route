import {
  Directive, ElementRef,
  HostListener, Input, OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlightMe]'
})
export class HighlightMeDirective implements OnInit {

  constructor(private el: ElementRef) {
    //this.highLight(this.highlightColor);
    this.el.nativeElement.style.fontSize = 'x-large';
  }

  ngOnInit() {
    this.highLight(this.highlightColor);
  }

  @Input('appHighlightMe') highlightColor: string;

  @Input('toggleColor') toggleColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.toggleColor);
  }

  private highLight(color: string) {
    this.el.nativeElement.style.color = '#FFFFFF';
    this.el.nativeElement.style.backgroundColor = color || '#D6DBDF';
  }

}
