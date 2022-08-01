import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FundraiserResponseDto } from '../dtos/v1/fundraiser.response.dto';

@Injectable()
export class ResponseSerializerInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map(data => {
          if (data != null) {
            return Array.isArray(data) ?
              data.map(item => instanceToPlain(new FundraiserResponseDto(item.toJSON()))) :
              instanceToPlain(new FundraiserResponseDto(data.toJSON()));
          }
        })
      )
  }
}
