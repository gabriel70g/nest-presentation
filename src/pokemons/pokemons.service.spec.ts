import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsService } from './pokemons.service';
import { PokemonsModule } from './pokemons.module';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';

describe('PokemonsService', () => {
  let repository: Repository<Pokemon>;
  let service: PokemonsService;
  let  logger = jest.fn();
  
  
  beforeEach(async () => {

    

    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonsService],
      imports: [PokemonsModule],
      exports: [PokemonsService]
    }).compile();

    service = new PokemonsService(repository)

    service = module.get<PokemonsService>(PokemonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
