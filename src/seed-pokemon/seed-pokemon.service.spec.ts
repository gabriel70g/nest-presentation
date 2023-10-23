import { Test, TestingModule } from '@nestjs/testing';
import { SeedPokemonService } from './seed-pokemon.service';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { PokemonsService } from 'src/pokemons/pokemons.service';

describe('SeedPokemonService', () => {
  let service: SeedPokemonService;
  let pokemonService : PokemonsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      providers: [SeedPokemonService],
      imports:[PokemonsModule]
    }).compile();

    service = new SeedPokemonService(pokemonService)

    service = module.get<SeedPokemonService>(SeedPokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
