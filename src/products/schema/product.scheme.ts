import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
class Discount {
  @Prop({ type: Boolean })
  status: boolean;

  @Prop({ type: Number })
  discountedPrice: number;
}

export const DiscountSchema = SchemaFactory.createForClass(Discount);

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  inStock: number;

  @Prop()
  isExp: boolean;

  @Prop({ type: DiscountSchema })
  discount: Discount;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
