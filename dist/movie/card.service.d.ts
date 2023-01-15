import { Model } from 'mongoose';
import { Card, CardDocument } from '../schema/movie.schema';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
export declare class CardService {
    private CardModel;
    constructor(CardModel: Model<CardDocument>);
    getMovieByTitle(title: string): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMovieById(id: string): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    allMovies(): Promise<(Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createMovie(CreateCardDto: CreateCardDto): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMovie(id: string, updateCardDto: UpdateCardDto): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeMovie(id: string): Promise<Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
