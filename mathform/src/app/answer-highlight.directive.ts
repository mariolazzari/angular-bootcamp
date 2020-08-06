import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {
  constructor(private el: ElementRef, private controlName: NgControl) {}

  ngOnInit() {
    this.controlName.control.parent.valueChanges
      .pipe(map(({ a, b, answer }) => Math.abs((a + b - answer) / (a + b))))
      .subscribe(value => {
        console.log(value);
      });
  }
}
