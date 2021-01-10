import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit, OnDestroy {
  n: number;
  personSubscription: Subscription;

  constructor(private dataService: DataService) {
    console.log('PersonComponent');
  }

  ngOnInit() {
    this.personSubscription = this.dataService.person$.subscribe(
      (n) => {
        this.n = n;
      },
      (err) => console.error(err),
      () => console.log('Person$ Completed')
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    if (this.personSubscription) {
      this.personSubscription.unsubscribe();
    }
  }

  increment() {
    this.dataService.inc();
  }
}
