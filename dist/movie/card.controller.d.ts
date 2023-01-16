import { CardService } from './card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
export declare class CardController {
    private readonly CardService;
    constructor(CardService: CardService);
    getAllCards(): Promise<(import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createCard(CreateCardDto: CreateCardDto): Promise<import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    modifyCard(id: string, updateCardDto: UpdateCardDto): Promise<import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteCard(id: string): Promise<import("../schema/movie.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
