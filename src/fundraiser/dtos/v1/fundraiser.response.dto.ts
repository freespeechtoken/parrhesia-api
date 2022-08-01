import { Expose, Transform } from "class-transformer";
import { ObjectId } from "mongoose";
import { Category } from "src/category/entities/category.entity";
import { UploadObject } from "src/common/abstractions/upload-object.class";
import { Fundraiser } from "src/fundraiser/entities/fundraiser.entity";

export class FundraiserResponseDto implements Partial<Fundraiser> {

  @Transform((value) => value.toString(), { toPlainOnly: true })
  _id: ObjectId;

  title: string;
  description: string;
  
  goalAmount: number;
  originalWalletAddress: string;

  projectDetails?: {
    name?: string;
    description?: string;
    url?: string;
  };


  uploads?: UploadObject; 
  categoryId: Category;

  constructor(fundraiser: Partial<FundraiserResponseDto>) {
    // super()
    Object.assign(this, fundraiser);
  }
}