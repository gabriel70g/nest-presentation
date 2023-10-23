import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PokemonsModule } from './pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedPokemonModule } from './seed-pokemon/seed-pokemon.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    PokemonsModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      autoLoadEntities: true
    }),

    SeedPokemonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {}
