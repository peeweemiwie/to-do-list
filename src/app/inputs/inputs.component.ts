import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  addTaskValue: { item: string, date: string} = { item: null, date: null};
  constructor() { }

  ngOnInit() {
  }
  todoLists = [];
  addList() {
    if (this.addTaskValue.item && this.addTaskValue.date) {
      this.todoLists.push(this.addTaskValue);
    }
  }
  clearItem() {
    if (this.addTaskValue.item || this.addTaskValue.date) {
      this.addTaskValue.item = null;
      this.addTaskValue.date = null;
    }
  }
  removeRow(item: string) {
    if(item) {
      const itemIndex:number = this.todoLists.indexOf(item);
      this.todoLists.splice(itemIndex, 1);
    }
  }
}
