import { HttpStatus } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { CreateCardDto } from '../src/dto/create-card.dto'
import { GenreType } from '../src/form.types';
import * as request from 'supertest';

import { User } from '../src/entities/user.entity';
import { UpdateCardDto } from '../src/dto/update-card.dto';

describe('CardController (e2e)', () => {
    let token : string = "";
    let id : string = "";
    const authUrl = `http://localhost:5000`;
    const mockUser: User = {
        username: "test4@mail.com",
        password: "test",
    };
    const CreateCardDto : CreateCardDto = {
        name: "Portátil - 90NX02M4-M00420 ASUS, 11,6 \", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul",
        url: "https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html",
        imageurl: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png",
        brand: "ASUS",
        specifications: [
          {
            key: "Tamaño pantalla (cm/pulg):",
            value: "33.78 cm / 13.3"
          },
          {
            key: "Resolución",
            value: "2560 x 1600 píxeles"
          }
        ],
        deliveryTime: "1",
        price: "200.52",
        availability: "Disponible online"
      }
    const upCardDto : UpdateCardDto = {
        name: "Portátil - 90NX02M4-M00420 ASUS, 11,6 \", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul",
        url: "https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html",
        imageurl: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png",
        brand: "ASUS",
        specifications: [
          {
            key: "Tamaño pantalla (cm/pulg):",
            value: "33.78 cm / 13.3"
          },
          {
            key: "Resolución",
            value: "2560 x 1600 píxeles"
          }
        ],
        deliveryTime: "2",
        price: "200.52",
        availability: "Disponible online"
      }
    beforeAll(async () => {
        const response = await request(authUrl)
        .post("/auth/login")
        .set("Accept", "application/json")
        .send(mockUser)
      token = response.body.access_token;
    });
    describe('/cards/createCard (POST)', () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .post('/cards/createCard')
            .set('Authorization', `Bearer ${token}`)
            .send(CreateCardDto)
            .expect((response: request.Response) => {
                const {
                    _id,
                    name,
                    url,
                    imageurl,
                    brand,
                    specifications,
                    deliveryTime,
                    price,
                    availability,
                } = response.body;
                id = _id;
                expect(typeof _id).toBe("string")
                expect(name).toEqual(CreateCardDto.name)
                expect(url).toEqual(CreateCardDto.url)
                expect(imageurl).toEqual(CreateCardDto.imageurl)
                expect(brand).toEqual(CreateCardDto.brand)
                expect(deliveryTime).toEqual(CreateCardDto.deliveryTime)
                expect(price).toEqual(CreateCardDto.price)
                expect(availability).toEqual(CreateCardDto.availability)
            }).expect(HttpStatus.CREATED);
        })
    })
    describe("/cards (GET)", () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .get("/cards")
            .set('Authorization', `Bearer ${token}`)
            .expect((response: request.Response) => {
             }).expect(HttpStatus.OK);
        })
    })
    describe('/modifyCard/:id (PUT)', () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .put(`/cards/modifyCard/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(upCardDto)
            .expect((response: request.Response) => {
                const {
                    _id,
                    name,
                    url,
                    imageurl,
                    brand,
                    specifications,
                    deliveryTime,
                    price,
                    availability,
                } = response.body;
                id = _id;
                expect(typeof _id).toBe("string")
                expect(name).toEqual(CreateCardDto.name)
                expect(url).toEqual(CreateCardDto.url)
                expect(imageurl).toEqual(CreateCardDto.imageurl)
                expect(brand).toEqual(CreateCardDto.brand)
                expect(deliveryTime).toEqual(CreateCardDto.deliveryTime)
                expect(price).toEqual(CreateCardDto.price)
                expect(availability).toEqual(CreateCardDto.availability)

            }).expect(HttpStatus.OK);
        })
    })
    describe('/deleteCard/:id (PUT)', () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .delete(`/cards/deleteCard/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((response: request.Response) => {
                const {
                    _id,
                    name,
                    url,
                    imageurl,
                    brand,
                    specifications,
                    deliveryTime,
                    price,
                    availability,
                } = response.body;
                expect(typeof _id).toBe("string")
                expect(name).toEqual(upCardDto.name)
                expect(url).toEqual(upCardDto.url)
                expect(imageurl).toEqual(upCardDto.imageurl)
                expect(brand).toEqual(upCardDto.brand)
                expect(deliveryTime).toEqual(upCardDto.deliveryTime)
                expect(price).toEqual(upCardDto.price)
                expect(availability).toEqual(upCardDto.availability)
            }).expect(HttpStatus.OK);
        })
    })
});