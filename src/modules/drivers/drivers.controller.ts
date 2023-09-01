import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from '../../domains/entities/driver.entity';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  async findAll(): Promise<Driver[]> {
    return this.driversService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Driver> {
    return this.driversService.findById(id);
  }

  @Post()
  async create(@Body() DriverData: Partial<Driver>): Promise<Driver> {
    return this.driversService.create(DriverData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() DriverData: Partial<Driver>,
  ): Promise<Driver> {
    return this.driversService.update(id, DriverData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.driversService.delete(id);
  }
}
