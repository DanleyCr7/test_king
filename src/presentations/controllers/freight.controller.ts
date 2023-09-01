// src/freight/freight.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FreightRepository } from '../../infrastructures/repositories/freight.repository';
import { Freight } from '../../domains/entities/freight.entity';
import { FreightOffer } from '../../domains/entities/freight-offer.entity';
import { FindAllFreightUseCase } from './../../applications/use-cases/freight/findAll.use-case';
import { FindOneFreightUseCase } from './../../applications/use-cases/freight/findOne.use-case';
import { CreateFreightUseCase } from './../../applications/use-cases/freight/create.use-case';
import { UpdateFreightUseCase } from './../../applications/use-cases/freight/update.use-case';
import { DeleteFreightUseCase } from './../../applications/use-cases/freight/delete.use-case';
import { ListFreightCategoryCarUseCase } from 'src/applications/use-cases/freight/listFreightCategoryCar.use-case';
@Controller('freight')
export class FreightController {
  constructor(
    private readonly freightService: FreightRepository,
    private readonly findAllFreightUseCase: FindAllFreightUseCase,
    private readonly findOneFreightUseCase: FindOneFreightUseCase,
    private readonly createFreightUseCase: CreateFreightUseCase,
    private readonly updateFreightUseCase: UpdateFreightUseCase,
    private readonly deleteFreightUseCase: DeleteFreightUseCase,
    private readonly listFreightCategoryCarUseCase: ListFreightCategoryCarUseCase,
  ) {}

  @Get()
  findAll(): Promise<Freight[]> {
    return this.findAllFreightUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Freight> {
    return this.findOneFreightUseCase.execute(id);
  }

  @Post()
  create(@Body() freight: Freight): Promise<Freight> {
    return this.createFreightUseCase.execute(freight);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() freight: Freight): Promise<Freight> {
    return this.updateFreightUseCase.execute(id, freight);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.deleteFreightUseCase.execute(id);
  }

  @Get('/client/:client_id')
  findClient(@Param('client_id') client_id: number): Promise<Freight[]> {
    return this.freightService.findClient(client_id);
  }

  @Get(':id/offers')
  findOneWithOffers(@Param('id') id: number): Promise<FreightOffer[]> {
    return this.freightService.findOneWithOffers(id);
  }

  @Get('/category_car/:id')
  findFreightsByCategoryCar(@Param('id') id: number): Promise<Freight[]> {
    return this.listFreightCategoryCarUseCase.execute(id);
  }
}
