export interface Pokemons {
  count: number;
  next: string;
  previous?: any;
  results: results[];
}

export interface results {
  name: string;
  url: string;
}