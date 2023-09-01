// src/freight/freight-offer.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Freight } from './freight.entity';
import { Driver } from './driver.entity';

@Entity('freights_offers')
export class FreightOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Freight, (freight) => freight.offers)
  @JoinColumn({ name: 'freight_id', referencedColumnName: 'id' })
  freight: Freight;

  @ManyToOne(() => Driver, (driver) => driver.offers)
  driver: Driver;

  @Column({ nullable: true })
  freight_id: number;

  @Column({ nullable: true })
  driver_id: number;

  @Column({ default: 0 })
  send: number;

  @Column({ type: 'double', nullable: true })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
