import { Document, SchemaTypes } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Category } from '../../category/entities/category.entity';
import { UploadObject } from "src/common/abstractions/upload-object.class";

@Schema()
export class Fundraiser extends Document {

  @Prop({ required: true, index: true })
  title: string;

  @Prop({ required: true, index: true })
  description: string;

  @Prop({ required: true })
  goalAmount: number;

  @Prop({ required: false, type: SchemaTypes.Mixed })
  projectDetails?: {
    name?: string;
    description?: string;
    url?: string;
  }
  
  @Prop({ required: true, index: true })
  originalWalletAddress: string;

  @Prop({ required: true, index: true })
  temporaryWalletAddress: string;

  @Prop({ required: false })
  uploads?: UploadObject; 

  @Prop({ required: true, index: true, type: SchemaTypes.ObjectId, ref: 'Category' })
  categoryId: Category;

}

export const FundraiserSchema = SchemaFactory.createForClass(Fundraiser);