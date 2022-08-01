import { BadRequestException, UsePipes } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsNumber, IsObject, IsOptional, Min } from 'class-validator';
import { ObjectId, Types } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';
import { UploadObject } from 'src/common/abstractions/upload-object.class';

export class FundraiserRequestDto {
  constructor(identities: Partial<FundraiserRequestDto>) {
    Object.assign(this, identities);
  }

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(100)
  goalAmount: number;

  @IsOptional()
  @IsObject()
  projectDetails?: {
    name?: string;
    description?: string;
    url?: string;
  };

  @IsNotEmpty()
  originalWalletAddress: string;

  @IsOptional()
  uploads?: UploadObject; 

  @IsNotEmpty()
  @Type(() => Types.ObjectId)
  @IsMongoId()
  categoryId: ObjectId;
}
