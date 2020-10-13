import {
  Directive, Optional, Host, ElementRef, OnInit, Input, OnDestroy
} from '@angular/core';

import { FlickityDirective } from '../flickity/flickity.directive';

@Directive({ selector: '[flickityChild]' })
export class FlickityChildDirective implements OnInit, OnDestroy {

  @Input() flickityChild: any;

  constructor(private el: ElementRef,
              @Optional() @Host() private parent?: FlickityDirective) { }

  ngOnInit(): void {
    if (!this.parent) {
      return;
    }

    this.parent.append(this.el.nativeElement);
  }


  ngOnDestroy(): void {
    if (!this.parent) {
      return;
    }
    this.parent.remove(this.el.nativeElement);
  }

}
