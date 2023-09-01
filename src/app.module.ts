import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './modules/drivers/drivers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './modules/cars/cars.module';
import { AuthModule } from './modules/auth/auth.module';
import { FreightModule } from './presentations/modules/freight.module';
import { FreightOffersModule } from './modules/freight_offers/freight_offers.module';
import { AddressModule } from './modules/address/address.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.buscafreteapi.kinghost.net',
      username: 'buscafreteapi',
      password: 'rP4hW8f5uRQSqCt',
      database: 'buscafreteapi',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DriversModule,
    CarsModule,
    UsersModule,
    AuthModule,
    FreightModule,
    FreightOffersModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
