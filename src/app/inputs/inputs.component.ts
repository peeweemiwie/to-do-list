import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  todoLists = [];
  addList(newItem: string) {
    if (newItem) {
      this.todoLists.push(newItem);
    }
  }
  removeRow(item: string) {
    if(item) {
      const itemIndex:number = this.todoLists.indexOf(item);
      this.todoLists.splice(itemIndex, 1);
    }
  }
}
