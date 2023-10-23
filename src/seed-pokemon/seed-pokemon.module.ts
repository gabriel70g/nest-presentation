import { Module } from '@nestjs/common';
import { SeedPokemonService } from './seed-pokemon.service';
import { SeedPokemonController } from './seed-pokemon.controller';
import { PokemonsModule } from 'src/pokemons/pokemons.module';

@Module({
  controllers: [SeedPokemonController],
  providers: [SeedPokemonService],
  imports: [PokemonsModule]
})
export class SeedPokemonModule {}
