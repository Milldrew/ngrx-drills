import { Jedi } from '../app-state';
export function jediReducer(
  state: Jedi[] = [{ id: 0, name: 'foobar' }],
  action: any
) {
  switch (action.type) {
    case 'ADD_JEDI':
      return [...state, { ...action.payload }];
    case 'REMOVE_JEDI':
      return state.filter((jedi: Jedi) => jedi.id !== action.payload.id);
    case 'LOAD_JEDIS':
      return action.payload.map((jedi: Jedi) => ({ ...jedi }));
    default:
      return state;
  }
}
