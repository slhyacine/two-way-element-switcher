import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  leftElements: any[] = [
    {
      label: 'Element1',
      selected: false
    },
    {
      label: 'Element2',
      selected: false
    },
    {
      label: 'Element3',
      selected: false
    },
    {
      label: 'Element4',
      selected: false
    },
    {
      label: 'Element5',
      selected: false
    },
    {
      label: 'Element6',
      selected: false
    }
  ];

  rightElements: any[] = [];

  moveRight() {
    const element = this.leftElements.pop();
    if (element) { this.rightElements.push(element); }
  }

  moveLeft() {
    const element = this.rightElements.pop();
    if (element) { this.leftElements.push(element); }
  }
}
