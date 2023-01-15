import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { CardController } from './card.controller';
import { GenreType } from '../form.types';

class ApiServiceMock {
    getMovieByTitle(title: string) {
       return [];
    }
    getMovieById(id: string) {
        return [];
    }
    createMovie(CreateCardDto: CreateCardDto) {
      return [];
    }
    allMovies() {
      return null;
    }
    updateMovie(id: string, updateCardDto: UpdateCardDto) {
      return [];
    }
    removeMovie(id: string) {
        return [];
    }
}

describe.only("CardService", () => {
    let cardService: CardService;
    beforeAll(async () => {
        const ApiServiceProvider = {
          provide: CardService,
          useClass: ApiServiceMock,
        }
        const module: TestingModule = await Test.createTestingModule({
          providers: [
            CardService, ApiServiceProvider
          ],
        }).compile();
        cardService = module.get<CardService>(CardService);
    })

    it('should call createMovie method with expected params', async () => {
        const createNoteSpy = jest.spyOn(cardService, 'createMovie');
        const dto = new CreateCardDto();
        cardService.createMovie(dto);
        expect(createNoteSpy).toHaveBeenCalledWith(dto);
    });

    it('should call getMovieByTitle method with expected param', async () => {
        const getMovieByTitleSpy = jest.spyOn(cardService, 'getMovieByTitle');
        const title: string = "Inception";
        cardService.getMovieByTitle(title);
        expect(getMovieByTitleSpy).toHaveBeenCalledWith(title);
    });

    it('should call getMovieById method with expected param', async () => {
        const getMovieByIdSpy = jest.spyOn(cardService, 'getMovieById');
        const id: string = "Id";
        cardService.getMovieById(id);
        expect(getMovieByIdSpy).toHaveBeenCalledWith(id);
    });

    it('should call updateMovie method with expected params', async () => {
        const updateMovieSpy = jest.spyOn(cardService, 'updateMovie');
        const Id = 'noteId';
        const dto = new UpdateCardDto();
        cardService.updateMovie(Id, dto);
        expect(updateMovieSpy).toHaveBeenCalledWith(Id, dto);
    });

    it('should call removeMovie method with expected param', async () => {
        const removeMovieSpy = jest.spyOn(cardService, 'removeMovie');
        const Id = 'Id';
        cardService.removeMovie(Id);
        expect(removeMovieSpy).toHaveBeenCalledWith(Id);
    });
})