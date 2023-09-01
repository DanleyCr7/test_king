import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FreightOffer } from './freight-offer.entity';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true, name: 'user_id' })
  userId: number;

  @Column({ type: 'int', default: 0, name: 'user_car' })
  useCar: number;

  @Column({ type: 'int', default: 0 })
  workWeekends: number;

  @Column({ type: 'int', default: 0 })
  weight: number;

  @Column({ length: 200, nullable: true })
  name: string;

  @Column({ length: 150, nullable: true, collation: 'utf8mb3_general_ci' })
  reference: string;

  @Column({ length: 200, nullable: true, collation: 'utf8mb3_general_ci' })
  phone: string;

  @Column({ length: 200, nullable: true, collation: 'utf8mb3_general_ci' })
  neighborhood: string;

  @Column({ nullable: true, type: 'timestamp' })
  created_at: Date;

  @Column({ nullable: true, type: 'timestamp' })
  deleted_at: Date;

  @Column({ nullable: true, type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => FreightOffer, (offer) => offer.driver)
  offers: FreightOffer[];
}
