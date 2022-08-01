import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FundraiserRequestDto } from 'src/fundraiser/dtos/v1/fundraiser.request.dto';
import { Fundraiser } from 'src/fundraiser/entities/fundraiser.entity';

@Injectable()
export class FundraiserService {

  constructor(
    @InjectModel(Fundraiser.name) private readonly fundraiserModel: Model<Fundraiser>
  ) { }
  
  async getAll(): Promise<Fundraiser[]> {
    const data = await this.fundraiserModel.find();
    return data
  }

  async create(requestBody: FundraiserRequestDto): Promise<Fundraiser> {
    const fundraiser = new this.fundraiserModel({
      ...requestBody,
      temporaryWalletAddress: "0x" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    });
    return await (await fundraiser.save()).populate('categoryId');
  }
}
