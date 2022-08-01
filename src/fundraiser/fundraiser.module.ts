import { Module } from '@nestjs/common';
import { FundraiserController } from './controllers/v1/fundraiser.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fundraiser, FundraiserSchema } from './entities/fundraiser.entity';
import { FundraiserService } from './services/v1/fundraiser.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Fundraiser.name,
        schema: FundraiserSchema,
      }
    ])
  ],
  controllers: [FundraiserController],
  providers: [FundraiserService]
})
export class FundraiserModule {}
