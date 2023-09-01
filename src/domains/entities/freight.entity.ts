// src/freight/freight.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FreightOffer } from './freight-offer.entity';
import { Address } from './address.entity';

@Entity('freight') // Especifica o nome da tabela "freight"
export class Freight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true, name: 'client_id' })
  client_id: number;

  @Column({ type: 'int', nullable: true, name: 'category_id' })
  category_id: number;

  // Adicione o campo inverso do relacionamento
  @OneToMany(() => FreightOffer, (offer) => offer.freight)
  offers: FreightOffer[];

  @Column({ type: 'int', nullable: true, name: 'driver_id' })
  driver_id: number;

  @Column({ type: 'int', default: 0 })
  accept: number;

  @Column({ type: 'int', default: 0 })
  finally: number;

  @Column({ name: 'address_id_initial', nullable: true })
  address_id_initial: number;

  @Column({ name: 'address_id_finaly', nullable: true })
  address_id_finaly: number;

  // Relação ManyToOne com Address
  @ManyToOne(() => Address, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'address_id_initial' })
  address_initial: Address;

  @ManyToOne(() => Address, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'address_id_finaly' })
  address_finaly: Address;

  @Column({ type: 'text', nullable: true })
  items: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  deleted_at: Date;
}
