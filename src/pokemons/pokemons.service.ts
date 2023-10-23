import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonsService {
  private readonly logger = new Logger('PokemonsService');

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    this.logger.log('create');
    this.logger.log(createPokemonDto)
    try{
      
      const pokemon = await this.pokemonRepository.create(createPokemonDto);
      this.pokemonRepository.save(pokemon);
      return pokemon;
    } catch(err){
      this.logger.log('error\n', err )
    }
    finally{
      this.logger.log('final');
    }
  }

  async findAll() {
    return await this.pokemonRepository.find();
  }

  async findOne(term: string) {
    const pokemon = await this.pokemonRepository.findOneBy( { id: term });
    if (!pokemon) throw new NotFoundException(`No existe el pokemon ${term}`)
    return pokemon;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    const Pokemon =  this.findOne(id)
    const pokemonResp = this.pokemonRepository.save({
      id,
      ...updatePokemonDto
    })
    return pokemonResp;
  }

  async remove(id: string) {
    const pokemon = await this.findOne(id)
    this.pokemonRepository.remove(pokemon);
    return pokemon;
  }

  async deleteAllPokemons() {
    this.pokemonRepository.clear();
  }
}
