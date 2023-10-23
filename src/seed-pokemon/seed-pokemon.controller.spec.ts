import { Test, TestingModule } from '@nestjs/testing';
import { SeedPokemonController } from './seed-pokemon.controller';
import { SeedPokemonService } from './seed-pokemon.service';
import { PokemonsModule } from 'src/pokemons/pokemons.module';

describe('SeedPokemonController', () => {
  let controller: SeedPokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedPokemonController],
      providers: [SeedPokemonService],
      imports: [PokemonsModule]
    }).compile();

    controller = module.get<SeedPokemonController>(SeedPokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
