import { Document } from "mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Category extends Document {
  @Prop({ required: true, index: true, sparse: true })
  name: string;

  @Prop({ required: true, enum: ['active', 'inactive'], default: 'active' })  
  status: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);