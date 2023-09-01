import { Injectable } from '@nestjs/common';
import { Freight } from '../../../domains/entities/freight.entity';
import { FreightRepository } from '../../../infrastructures/repositories/freight.repository';

@Injectable()
export class FindAllFreightUseCase {
  constructor(private readonly freightRepository: FreightRepository) {}

  async execute(): Promise<Freight[]> {
    return this.freightRepository.findAll();
  }
}
