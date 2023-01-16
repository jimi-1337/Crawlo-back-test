import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { CardController } from './card.controller';
import { GenreType } from '../form.types';

describe("CardController Unit Tests", () => {
    let cardController: CardController;
    let spyService: CardService;
    const ApiServiceProvider = {
        provide: CardService,
        useFactory: () => ({
            getCardByTitle: jest.fn(() => []),
            getCardById: jest.fn(() => []),
            allCards: jest.fn(() => { }),
            createCard: jest.fn(() => { }),
            updateCard: jest.fn(() => { }),
            removeCard: jest.fn(() => { })
        })
    }
    beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        controllers: [CardController],
        providers: [CardService, ApiServiceProvider],
    }).compile();
    cardController = app.get<CardController>(CardController);
    spyService = app.get<CardService>(CardService);
    })
    it('ApiService - should be defined', () => {
        expect(spyService).toBeDefined();
      });
    it("calling createCard method", async () => {
        const CreateCardDto : CreateCardDto = {
            name : 'Portátil - 90NX02M4-M00420 ASUS, 11,6 ", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul',
            url : 'https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html',
            imageurl : "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png",
            specifications : [
                {
                    key: "Tamaño pantalla (cm/pulg):",
                    value: "33.78 cm / 13.3"
                },
                {
                    key: "Resolución",
                    value: "2560 x 1600 píxeles"
                }
            ],
            brand : "ASUS",
            deliveryTime : "1",
            price : "200.52",
            availability : "Disponible online",
        }
        expect(cardController.createCard(CreateCardDto)).not.toEqual(null);
    })
    it("calling createCard method", async () => {
        const CreateCardDto : CreateCardDto = {
            name : 'Portátil - 90NX02M4-M00420 ASUS, 11,6 ", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul',
            url : 'https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html',
            imageurl : "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png",
            specifications : [
                {
                    key: "Tamaño pantalla (cm/pulg):",
                    value: "33.78 cm / 13.3"
                },
                {
                    key: "Resolución",
                    value: "2560 x 1600 píxeles"
                }
            ],
            brand : "ASUS",
            deliveryTime : "1",
            price : "200.52",
            availability : "Disponible online",
        }
        cardController.createCard(CreateCardDto);
        expect(spyService.createCard).toHaveBeenCalled();
        expect(spyService.createCard).toHaveBeenCalledWith(CreateCardDto);
    })
    it("calling getAllCards method", () => {
        cardController.getAllCards();
        expect(spyService.allCards).toHaveBeenCalled();
    })
    it("calling modifyCard method", () => {
        const id : string = 'jhdsfhds';
        const updateCardDto : UpdateCardDto = {
            name : 'Portátil - 90NX02M4-M00420 ASUS, 11,6 ", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul',
            url : 'https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html',
            imageurl : "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png",
            specifications : [
                {
                    key: "Tamaño pantalla (cm/pulg):",
                    value: "33.78 cm / 13.3"
                },
                {
                    key: "Resolución",
                    value: "2560 x 1600 píxeles"
                }
            ],
            brand : "ASUS",
            deliveryTime : "1",
            price : "200.52",
            availability : "Disponible online",
        }
        cardController.modifyCard(id, updateCardDto);
        expect(spyService.updateCard).toHaveBeenCalled();
        expect(spyService.updateCard).toHaveBeenCalledWith(id, updateCardDto);
    })
    it("calling deleteCard method", () => {
        const id : string = 'jhdsfhds';
        cardController.deleteCard(id);
        expect(spyService.removeCard).toHaveBeenCalled();
        expect(spyService.removeCard).toHaveBeenCalledWith(id);
    })
})