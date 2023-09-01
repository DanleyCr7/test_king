// src/freight/freight.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Freight } from '../../domains/entities/freight.entity';
import { FreightOffer } from '../../domains/entities/freight-offer.entity';
@Injectable()
export class FreightService {
  constructor(
    @InjectRepository(Freight)
    private readonly freightRepository: Repository<Freight>,
    @InjectRepository(FreightOffer) // Use o decorador @InjectRepository para o FreightOffersRepository
    private readonly freightOffersRepository: Repository<FreightOffer>,
  ) {}

  async findAll(): Promise<Freight[]> {
    return this.freightRepository.find();
  }

  async findOne(id: number): Promise<Freight> {
    return this.freightRepository.findOne({
      where: {
        id: id,
      },
      relations: ['address_initial', 'address_finaly'],
    });
  }

  async create(freight: Freight): Promise<Freight> {
    const savedFreight = await this.freightRepository.save(freight);
    const freightWithAddress = await this.findOne(savedFreight.id);
    return freightWithAddress;
  }

  async update(id: number, freight: Freight): Promise<Freight> {
    await this.freightRepository.update(id, freight);
    return this.freightRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.freightRepository.delete(id);
  }

  async findClient(client_id: number): Promise<Freight[]> {
    return this.freightRepository.find({
      where: {
        client_id: client_id,
      },
      relations: ['offers', 'address_initial', 'address_finaly'],
    });
  }

  async findOneWithOffers(id: number): Promise<FreightOffer[]> {
    // Ajuste para retornar FreightOffers em vez de FreightOffers[]
    return this.freightOffersRepository.find({
      where: {
        freight_id: id,
      },
    });
  }
}
