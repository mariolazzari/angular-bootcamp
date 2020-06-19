import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsed = parseInt(value);
    if (!isNaN(parsed)) {
      this.length = parsed;
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    console.log(`Passowrd length: ${this.length}
    - use letters: ${this.useLetters}
    - use numbers: ${this.useNumbers}
    - use symbols: ${this.useSymbols}`);

    this.password = 'Button clicked';
  }
}
