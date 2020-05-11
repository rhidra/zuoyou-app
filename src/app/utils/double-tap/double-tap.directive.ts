import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[doubleTapable]'
})
export class DoubleTapDirective {
  @Output() doubleTap = new EventEmitter();
  @Output() tripleTap = new EventEmitter();

  constructor() {}

  @HostListener('tap',  ['$event'])
  onTap(e) {
    if (e.tapCount === 2) { this.doubleTap.emit(e); }
    if (e.tapCount === 3) { this.tripleTap.emit(e); }
  }

}
