import { Injectable } from '@nestjs/common';
import { FreightRepository } from '../../../infrastructures/repositories/freight.repository';

@Injectable()
export class DeleteFreightUseCase {
  constructor(private readonly freightRepository: FreightRepository) {}

  async execute(id: number): Promise<void> {
    return this.freightRepository.remove(id);
  }
}
