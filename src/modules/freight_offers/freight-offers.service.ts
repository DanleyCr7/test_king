// src/freight/freight.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FreightOffer } from '../../domains/entities/freight-offer.entity';

@Injectable()
export class FreightOffersService {
  constructor(
    @InjectRepository(FreightOffer)
    private readonly freightOffersRepository: Repository<FreightOffer>,
  ) {}

  async findAll(): Promise<FreightOffer[]> {
    return this.freightOffersRepository.find();
  }
}
