import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../_models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

    return this.http.post('https://reqres.in/api/users', item, {
      headers: customHeaders,
    });
  }

  private personSubject = new BehaviorSubject<number>(1);
  person$ = this.personSubject.asObservable();

  inc() {
    console.log(this.personSubject.observers.length);
    this.personSubject.next(this.personSubject.value + 1);
  }
}
