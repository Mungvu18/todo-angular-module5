import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ITodo} from '../ITodo';
let _id = 1;
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<ITodo> = [];
  user = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    const {value} = this.userInput;
    if(value){
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      }
      this.todos.push(todo);
    }
  }
  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
