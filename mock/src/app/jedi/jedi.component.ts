import { AppState, Jedi } from '../app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jedi',
  templateUrl: './jedi.component.html',
  styleUrls: ['./jedi.component.css'],
})
export class JediComponent implements OnInit {
  jedis$: Observable<Jedi[]>;
  id: number = 0;
  constructor(private store: Store<AppState>) {
    this.jedis$ = store.select('jedis');
  }
  jediName?: string;

  add() {
    this.id++;
    console.log('hi');
    console.log(this.jediName);
    this.store.dispatch({
      type: 'ADD_JEDI',
      payload: { id: this.id, name: this.jediName },
    });
  }
  ngOnInit(): void {}
}
