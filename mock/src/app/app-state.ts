export type Jedi = {
  id: number;
  name: string;
};
export interface AppState {
  counter: number;
  jedis: Jedi[];
}
