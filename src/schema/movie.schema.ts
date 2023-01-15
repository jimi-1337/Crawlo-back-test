import {
    Prop,
    Schema,
    SchemaFactory
  } from '@nestjs/mongoose';
import {
    Document, SchemaTypes, Types
} from 'mongoose';
import { GenreType } from '../form.types';

  
export type CardDocument = Card & Document;

@Schema()
export class Card {
    @Prop()
    name: string;

    @Prop()
    url: string;

    @Prop()
    imageurl: string;

    @Prop()
    brand: string;

    @Prop()
    specifications: [];

    @Prop()
    deliveryTime: string;

    @Prop()
    price: string;

    @Prop()
    availability: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);