import { Injectable } from '@nestjs/common';
import { Freight } from '../../../domains/entities/freight.entity';
import { FreightRepository } from '../../../infrastructures/repositories/freight.repository';

@Injectable()
export class CreateFreightUseCase {
  constructor(private readonly freightRepository: FreightRepository) {}

  async execute(freight: Freight): Promise<Freight> {
    return this.freightRepository.create(freight);
  }
}
