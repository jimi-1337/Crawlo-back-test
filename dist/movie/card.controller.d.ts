import { CardService } from './card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
export declare class CardController {
    private readonly CardService;
    constructor(CardService: CardService);
    getAllMovies(): Promise<(import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createMovie(CreateCardDto: CreateCardDto): Promise<import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    modifyMovie(id: string, updateCardDto: UpdateCardDto): Promise<import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteMovie(id: string): Promise<import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
