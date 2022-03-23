import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mock';
  count: number = 0;

  reset() {
    this.count = 0;
  }
  decrement() {
    this.count -= 1;
  }
  increment() {
    this.count += 1;
  }
}
