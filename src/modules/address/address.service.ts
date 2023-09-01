// src/address/address.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../../domains/entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  async findOne(id: number): Promise<Address> {
    return this.addressRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(addressData: Partial<Address>): Promise<Address> {
    const address = this.addressRepository.create(addressData);
    return this.addressRepository.save(address);
  }

  async update(id: number, addressData: Partial<Address>): Promise<Address> {
    await this.addressRepository.update(id, addressData);
    return this.addressRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.addressRepository.delete(id);
  }
}
