import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    name: string;

    @Column('text')
    url: string;
}
