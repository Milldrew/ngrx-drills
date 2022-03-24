import { AppState, Jedi } from '../app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addJedi, removeJedi } from './jedi.actions';

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
  jediId?: number;

  add() {
    this.id++;
    this.store.dispatch(addJedi({ id: this.id, name: this.jediName }));
  }
  remove() {
    this.store.dispatch(removeJedi(this.jediId));
  }
  ngOnInit(): void {}
}
