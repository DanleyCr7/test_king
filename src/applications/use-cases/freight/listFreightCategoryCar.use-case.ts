import { Injectable } from '@nestjs/common';
import { Freight } from '../../../domains/entities/freight.entity';
import { FreightRepository } from '../../../infrastructures/repositories/freight.repository';

@Injectable()
export class ListFreightCategoryCarUseCase {
  constructor(private readonly freightRepository: FreightRepository) {}

  async execute(id: number): Promise<Freight[]> {
    return this.freightRepository.findFreightsByCategoryCar(id);
  }
}
