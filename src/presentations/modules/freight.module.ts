import { FreightRepository } from './../../infrastructures/repositories/freight.repository';
// src/freight/freight.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Freight } from '../../domains/entities/freight.entity';
import { FreightService } from '../../modules/freight/freight.service';
import { FreightController } from '../controllers/freight.controller';
import { FreightOffer } from '../../domains/entities/freight-offer.entity';
import { FindAllFreightUseCase } from '../../applications/use-cases/freight/findAll.use-case';
import { FindOneFreightUseCase } from '../../applications/use-cases/freight/findOne.use-case';
import { CreateFreightUseCase } from '../../applications/use-cases/freight/create.use-case';
import { UpdateFreightUseCase } from 'src/applications/use-cases/freight/update.use-case';
import { DeleteFreightUseCase } from 'src/applications/use-cases/freight/delete.use-case';
import { ListFreightCategoryCarUseCase } from 'src/applications/use-cases/freight/listFreightCategoryCar.use-case';

const usescases = [
  FindAllFreightUseCase,
  FindOneFreightUseCase,
  CreateFreightUseCase,
  UpdateFreightUseCase,
  DeleteFreightUseCase,
  ListFreightCategoryCarUseCase,
];

@Module({
  imports: [TypeOrmModule.forFeature([Freight, FreightOffer])],
  providers: [...usescases, FreightService, FreightRepository],
  controllers: [FreightController],
})
export class FreightModule {}
