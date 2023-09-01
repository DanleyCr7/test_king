import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true, name: 'category_car_id' })
  categoryCarId: number;

  @Column({ type: 'int', nullable: true, name: 'driver_id' })
  driverId: number;

  @Column({ length: 50, nullable: true })
  model: string;

  @Column({ length: 10, nullable: true })
  placa: string;

  @Column({ length: 5, nullable: true })
  ano: string;
}
