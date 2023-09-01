import { Test, TestingModule } from '@nestjs/testing';
import { FreightController } from './freight.controller';

describe('FreightController', () => {
  let controller: FreightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreightController],
    }).compile();

    controller = module.get<FreightController>(FreightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
