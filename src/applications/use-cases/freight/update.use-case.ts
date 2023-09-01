import { Injectable } from '@nestjs/common';
import { Freight } from '../../../domains/entities/freight.entity';
import { FreightRepository } from '../../../infrastructures/repositories/freight.repository';

@Injectable()
export class UpdateFreightUseCase {
  constructor(private readonly freightRepository: FreightRepository) {}

  async execute(id: number, freight: Freight): Promise<Freight> {
    return this.freightRepository.update(id, freight);
  }
}
