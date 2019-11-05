import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable, ObservedValueOf } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  todolimit = '?_limit=5';
  constructor(private httpClient: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.todoUrl}/${this.todolimit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const id = todo.id;
    const url = `${this.todoUrl}/${id}`;
    return this.httpClient.put(url, todo, httpOption);
  }

  deleteTodo(todo: Todo): Observable<Todo>{
    return this.httpClient.delete<Todo>(`${this.todoUrl}/${todo.id}`,httpOption);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.httpClient.post<Todo>(this.todoUrl,todo, httpOption);
  }
}
