import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    return this.todoService.getTodos().subscribe( todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter( t => t.id !== todo.id);
     this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){

    this.todoService.addTodo(todo).subscribe( t => this.todos.push(t));
  }

}
