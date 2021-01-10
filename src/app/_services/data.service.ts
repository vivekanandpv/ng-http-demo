import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../_models/todo.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  //  API for components

  getToDoItems() {
    return this.http.get<Todo[]>(`${environment.baseUrl}/todos`) as Observable<
      Todo[]
    >;
  }
}
