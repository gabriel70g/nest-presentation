import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedPokemonService } from './seed-pokemon.service';

@Controller('seed-pokemon')
export class SeedPokemonController {
  constructor(private readonly seedPokemonService: SeedPokemonService) {}

  
  @Get()
  seedExecute() {
    return this.seedPokemonService.seedPokemon();
  }
  
}
