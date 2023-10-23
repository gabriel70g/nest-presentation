
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokemonsService } from 'src/pokemons/pokemons.service';
import { Pokemons, results } from '../models/pokemonModel'

@Injectable()
export class SeedPokemonService {
  constructor(private readonly pokemonService: PokemonsService) {}

  async seedPokemon() {
    await this.pokemonService.deleteAllPokemons();

    const insertPromise = [];
    const pokeResult = await axios.get<Pokemons>(
      'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
    );
    
    pokeResult.data.results.forEach((poke) => {
       insertPromise.push(this.pokemonService.create(poke));
     });

    await Promise.all(insertPromise);

    return `Migration complete`;
  }
}
