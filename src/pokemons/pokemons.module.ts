import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [TypeOrmModule.forFeature([Pokemon])],
  exports:[PokemonsService]
})
export class PokemonsModule {}
