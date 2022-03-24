import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { jediReducer } from './jedi.reducer';
import { Jedi } from '../app-state';
import { Action } from 'rxjs/internal/scheduler/Action';
export type JedisState = {
  jedis: Jedi[];
};
const reducers: ActionReducerMap<JedisState> = {
  jedis: jediReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature<JedisState, Action>('jedis', reducers),
  ],
})
export class JediModule {}
