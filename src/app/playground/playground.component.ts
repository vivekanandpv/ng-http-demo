import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Observable } from 'rxjs';
import { Todo } from '../_models/todo.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  items$: Observable<Todo[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items$ = this.dataService.getToDoItems();
  }
}
