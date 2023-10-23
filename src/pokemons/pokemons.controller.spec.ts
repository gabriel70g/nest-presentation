import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

describe('PokemonsController', () => {
  let pokemonController: PokemonsController;
  let pokemonservice : PokemonsService;
  let pokemonRepository: Repository<Pokemon>,

  beforeEach ( async () => {
    
    pokemonservice = new PokemonsService(pokemonRepository);
    pokemonController = new PokemonsController(pokemonservice)


    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [PokemonsService],
      exports: [PokemonsService]
    }).compile();

    pokemonController = module.get<PokemonsController>(PokemonsController);
  });

  it('should be defined', () => {
    expect(pokemonController).toBeDefined();
  });
});
