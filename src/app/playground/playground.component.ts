import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../_models/todo.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  items$: Observable<Todo[]>;
  httpSubscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items$ = this.dataService.getToDoItems();
  }

  handler() {
    this.httpSubscription = this.dataService
      .createToDoItem({
        id: 100,
        completed: false,
        title: 'Title',
        userId: 5012
      })
      .subscribe(
        data => console.log('Http Post Success', data),
        error => console.error('Http Post Failure', error),
        () => console.log('Http Complete')
      );
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }
}
