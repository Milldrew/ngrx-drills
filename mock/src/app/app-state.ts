export type Jedi = {
  id: number;
  name: string | undefined;
};
export interface AppState {
  counter: number;
  jedis: Jedi[];
}
