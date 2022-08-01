import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { Fundraiser } from 'src/fundraiser/entities/fundraiser.entity';
import { FundraiserService } from 'src/fundraiser/services/v1/fundraiser.service';
import { ResponseSerializerInterceptor } from 'src/fundraiser/interceptors/response-serializer.interceptor';
import { FundraiserRequestDto } from 'src/fundraiser/dtos/v1/fundraiser.request.dto';
@Controller({
  version: '1',
  path: '/fundraisers'
})
export class FundraiserController {

  constructor(
    private readonly fundraiserService: FundraiserService
  ) { }
  
  @Get()
  @UseInterceptors(ResponseSerializerInterceptor)
  async get(): Promise<Fundraiser[]> {
    return await this.fundraiserService.getAll();
  }

  @Post()
  @UseInterceptors(ResponseSerializerInterceptor)
  async create(@Body() requestBody: FundraiserRequestDto): Promise<Fundraiser> {
    return await this.fundraiserService.create(requestBody);
  }
}
