import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../_models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  //  API for components

  getToDoItems() {
    return this.http.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    ) as Observable<Todo[]>;
  }

  createToDoItem(item: Todo) {
    const customHeaders = new HttpHeaders()
      .set('X-Custom-Header-A', 'Header-A-Value')
      .set('X-Custom-Header-B', 'Header-B-Value')
      .append('My-Header', 'My-Value');

    return this.http.post('http://localhost:3000/api/items', item, {
      headers: customHeaders
    });
  }
}
