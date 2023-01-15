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

    async getMovieByTitle(title: string) {
        return this.CardModel.findOne({
            title
        })
        .exec();
    }

    async getMovieById(id: string) {
        return this.CardModel.findById(id)
        .exec();
    }

    async allMovies() {
        return this.CardModel.find().exec();
    }

    async createMovie(CreateCardDto: CreateCardDto) {
        // validate DTO
        const createMovie = new this.CardModel(CreateCardDto);
        // check if movie exists
        // const movie = await this.getMovieByTitle(createMovie.name);
        // if (movie) {
        //     throw new BadRequestException();
        // }
        // createMovie.releaseDate = new Date(CreateCardDto.releaseDate);
        return createMovie.save();
    }

    async updateMovie(id: string, updateCardDto: UpdateCardDto) {
        const movie = await this.getMovieByTitle(updateCardDto.name);
        if (!movie) {
            throw new BadRequestException();
        }
        // updateCardDto.releaseDate = new Date(updateCardDto.releaseDate);
        return this.CardModel.findByIdAndUpdate(id, updateCardDto);
    }
    
    async removeMovie(id: string) {
        const movie = await this.getMovieById(id);
        if (!movie) {
            throw new BadRequestException();
        }
        return this.CardModel.findByIdAndRemove(id);
    }
}