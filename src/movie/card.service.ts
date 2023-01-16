import {
    Injectable,
    BadRequestException
} from '@nestjs/common';
import {
    CreateUserDto
} from '../dto/create-user.dto';
import {
    InjectModel
} from '@nestjs/mongoose';
import {
    Model
} from 'mongoose';
import {
    Card,
    CardDocument
} from '../schema/movie.schema';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
  
@Injectable()
export class CardService {

    constructor(@InjectModel(Card.name) private CardModel: Model < CardDocument >) {}

    async getCardByTitle(title: string) {
        return this.CardModel.findOne({
            title
        })
        .exec();
    }

    async getCardById(id: string) {
        return this.CardModel.findById(id)
        .exec();
    }

    async allCards() {
        return this.CardModel.find().exec();
    }

    async createCard(CreateCardDto: CreateCardDto) {
        // validate DTO
        const createCard = new this.CardModel(CreateCardDto);
        // check if Card exists
        // const Card = await this.getCardByTitle(createCard.name);
        // if (Card) {
        //     throw new BadRequestException();
        // }
        // createCard.releaseDate = new Date(CreateCardDto.releaseDate);
        return createCard.save();
    }

    async updateCard(id: string, updateCardDto: UpdateCardDto) {
        const Card = await this.getCardByTitle(updateCardDto.name);
        if (!Card) {
            throw new BadRequestException();
        }
        // updateCardDto.releaseDate = new Date(updateCardDto.releaseDate);
        return this.CardModel.findByIdAndUpdate(id, updateCardDto);
    }
    
    async removeCard(id: string) {
        const Card = await this.getCardById(id);
        if (!Card) {
            throw new BadRequestException();
        }
        return this.CardModel.findByIdAndRemove(id);
    }
}