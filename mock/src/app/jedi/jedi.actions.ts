import { Jedi } from '../app-state';
import { ADD_JEDI, LOAD_JEDIS, REMOVE_JEDI } from './jedi.constants';

export const addJedi = (jedi: Jedi) => ({ type: ADD_JEDI, payload: jedi });
export const removeJedi = (id: number | undefined) => ({
  type: REMOVE_JEDI,
  payload: { id },
});
export const loadJedis = () => ({ type: LOAD_JEDIS });
