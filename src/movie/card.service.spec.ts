import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { CardController } from './card.controller';
import { GenreType } from '../form.types';

class ApiServiceMock {
    getCardByTitle(title: string) {
       return [];
    }
    getCardById(id: string) {
        return [];
    }
    createCard(CreateCardDto: CreateCardDto) {
      return [];
    }
    allCards() {
      return null;
    }
    updateCard(id: string, updateCardDto: UpdateCardDto) {
      return [];
    }
    removeCard(id: string) {
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

    it('should call createCard method with expected params', async () => {
        const createNoteSpy = jest.spyOn(cardService, 'createCard');
        const dto = new CreateCardDto();
        cardService.createCard(dto);
        expect(createNoteSpy).toHaveBeenCalledWith(dto);
    });

    it('should call getCardByTitle method with expected param', async () => {
        const getCardByTitleSpy = jest.spyOn(cardService, 'getCardByTitle');
        const title: string = "Inception";
        cardService.getCardByTitle(title);
        expect(getCardByTitleSpy).toHaveBeenCalledWith(title);
    });

    it('should call getCardById method with expected param', async () => {
        const getCardByIdSpy = jest.spyOn(cardService, 'getCardById');
        const id: string = "Id";
        cardService.getCardById(id);
        expect(getCardByIdSpy).toHaveBeenCalledWith(id);
    });

    it('should call updateCard method with expected params', async () => {
        const updateCardSpy = jest.spyOn(cardService, 'updateCard');
        const Id = 'noteId';
        const dto = new UpdateCardDto();
        cardService.updateCard(Id, dto);
        expect(updateCardSpy).toHaveBeenCalledWith(Id, dto);
    });

    it('should call removeCard method with expected param', async () => {
        const removeCardSpy = jest.spyOn(cardService, 'removeCard');
        const Id = 'Id';
        cardService.removeCard(Id);
        expect(removeCardSpy).toHaveBeenCalledWith(Id);
    });
})