// src/address/address.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from '../../domains/entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Post()
  async create(@Body() addressData: Partial<Address>): Promise<Address> {
    return this.addressService.create(addressData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() addressData: Partial<Address>,
  ): Promise<Address> {
    return this.addressService.update(id, addressData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.addressService.delete(id);
  }
}
