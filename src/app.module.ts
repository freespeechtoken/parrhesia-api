import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { FundraiserModule } from './fundraiser/fundraiser.module';
import { CategoryModule } from './category/category.module';
import appConfig from './common/config/app.config';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongodb.uri')
      }),
      inject: [ConfigService],
    }),
    TerminusModule,
    FundraiserModule,
    CategoryModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
