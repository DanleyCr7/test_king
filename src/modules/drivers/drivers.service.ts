import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from '../../domains/entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}

  async findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  async findById(id: number): Promise<Driver> {
    return this.driverRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(driverData: Partial<Driver>): Promise<Driver> {
    return this.driverRepository.save(driverData);
  }

  async update(id: number, driverData: Partial<Driver>): Promise<Driver> {
    const driver = await this.driverRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!driver) {
      throw new Error('Driver não encontrado.');
    }

    Object.assign(driver, driverData);
    return this.driverRepository.save(driver);
  }

  async delete(id: number): Promise<void> {
    const driver = await this.driverRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!driver) {
      throw new Error('Driver não encontrado.');
    }

    await this.driverRepository.remove(driver);
  }
}
