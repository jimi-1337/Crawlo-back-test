import { Model } from 'mongoose';
import { Card, CardDocument } from '../schema/movie.schema';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
export declare class CardService {
    private CardModel;
    constructor(CardModel: Model<CardDocument>);
    getCardByTitle(title: string): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCardById(id: string): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    allCards(): Promise<(Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createCard(CreateCardDto: CreateCardDto): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateCard(id: string, updateCardDto: UpdateCardDto): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeCard(id: string): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
