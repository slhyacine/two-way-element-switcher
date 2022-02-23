import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listLeft: any[] = [
    { value: 'One', selected: false },
    { value: 'Two', selected: false },
    { value: 'Three', selected: false },
  ];
  listRight: any[] = [
    { value: 'Four', selected: false },
    { value: 'Five', selected: false },
    { value: 'Six', selected: false },
  ];
  log: string = 'default';
  selectionLeft = [];
  selectionRight = [];

  putLeft() {
    if (this.listRight.length > 0) {
      this.listLeft.push(this.listRight.pop());
    }
  }

  putRight() {
    if (this.listLeft.length > 0) {
      this.listRight.push(this.listLeft.pop());
    }
  }

  toggleSelection(elt, index, side) {
    elt.selected = !elt.selected;
    if (side === 'left') {
      if (this.selectionRight.length > 0) this.selectionRight = [];
      this.selectionLeft.push(elt);
    }
    if (side === 'right') {
      if (this.selectionLeft.length > 0) this.selectionLeft = [];
      this.selectionRight.push(elt);
    }
    console.log(this.selectionLeft);
    console.log(this.selectionRight);
  }
}
