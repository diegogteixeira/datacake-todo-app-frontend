import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  public allItems$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('http://127.0.0.1:8000/tasks/').subscribe(d => console.log(d));

    this.allItems$ = this.http.get('http://127.0.0.1:8000/tasks/');
  }

  // tarefas "hard coded"
  allItems = [
    { description: 'agendar pediatra', done: true },
    { description: 'estudar', done: false },
    { description: 'encomendar bolo', done: false },
    { description: 'comprar leite', done: false },
  ];

  // com filtro
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  // sem filtro
  // get items() {
  //   return this.allItems;
  // }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}
