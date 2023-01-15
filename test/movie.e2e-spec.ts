import { HttpStatus } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { CreateCardDto } from 'src/dto/create-card.dto';
import { GenreType } from '../src/form.types';
import * as request from 'supertest';

import { User } from '../src/entities/user.entity';
import { UpdateMovieDto } from '../src/dto/update-card.dto';

describe('CardController (e2e)', () => {
    let token : string = "";
    let id : string = "";
    const authUrl = `http://localhost:3000`;
    const mockUser: User = {
        username: "givenName8@mail.com",
        password: "password",
    };
    const CreateCardDto : CreateCardDto = {
        title : "test1111",
        description : "Inception is a 2010 science fiction action film written and directed by Christopher Nolan",
        releaseDate : "08-07-2010",
        rating : 5,
        poster : "Poster",
        actors : ['Leonardo DiCaprio', 'Tom Hardy'],
        genre : GenreType.Aventure
    }
    const upCardDto : UpdateMovieDto = {
        title : "test1111",
        description : "Inception is a 2010 science fiction action film written and directed by Christopher Nolan",
        releaseDate : "08-07-2010",
        rating : 7,
        poster : "Poster",
        actors : ['Leonardo DiCaprio', 'Tom Hardy'],
        genre : GenreType.Aventure
    }
    beforeAll(async () => {
        const response = await request(authUrl)
        .post("/auth/login")
        .set("Accept", "application/json")
        .send(mockUser)
      token = response.body.access_token;
    });
    describe('/movies/createMovie (POST)', () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .post('/movies/createMovie')
            .set('Authorization', `Bearer ${token}`)
            .send(CreateCardDto)
            .expect((response: request.Response) => {
                const {
                    _id,
                    title,
                    description,
                    releaseDate,
                    rating,
                    poster,
                    actors,
                    genre,
                } = response.body;
                id = _id;
                expect(typeof _id).toBe("string")
                expect(title).toEqual(CreateCardDto.title)
                expect(description).toEqual(CreateCardDto.description)
                expect(rating).toEqual(CreateCardDto.rating)
                expect(poster).toEqual(CreateCardDto.poster)
                expect(actors).toEqual(CreateCardDto.actors)
                // expect(releaseDate).toBeInstanceOf(Date)
                expect(genre).toEqual(CreateCardDto.genre)
            }).expect(HttpStatus.CREATED);
        })
    })
    describe("/movies (GET)", () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .get("/movies")
            .set('Authorization', `Bearer ${token}`)
            .expect((response: request.Response) => {
             }).expect(HttpStatus.OK);
        })
    })
    describe('/modifyMovie/:id (PUT)', () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .put(`/movies/modifyMovie/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(upCardDto)
            .expect((response: request.Response) => {
                const {
                    _id,
                    title,
                    description,
                    releaseDate,
                    rating,
                    poster,
                    actors,
                    genre,
                } = response.body;
                id = _id;
                expect(typeof _id).toBe("string")
                expect(title).toEqual(CreateCardDto.title)
                expect(description).toEqual(CreateCardDto.description)
                expect(rating).toEqual(CreateCardDto.rating)
                expect(poster).toEqual(CreateCardDto.poster)
                expect(actors).toEqual(CreateCardDto.actors)
                // expect(releaseDate).toBeInstanceOf(Date)
                expect(genre).toEqual(CreateCardDto.genre)
            }).expect(HttpStatus.OK);
        })
    })
    describe('/deleteMovie/:id (PUT)', () => {
        it("it should register a user and return the new user object", async () => {
            const response = await request(authUrl)
            .delete(`/movies/deleteMovie/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .expect((response: request.Response) => {
                const {
                    _id,
                    title,
                    description,
                    releaseDate,
                    rating,
                    poster,
                    actors,
                    genre,
                } = response.body;
                expect(typeof _id).toBe("string")
                expect(title).toEqual(upCardDto.title)
                expect(description).toEqual(upCardDto.description)
                expect(rating).toEqual(upCardDto.rating)
                expect(poster).toEqual(upCardDto.poster)
                expect(actors).toEqual(upCardDto.actors)
                // expect(releaseDate).toBeInstanceOf(Date)
                expect(genre).toEqual(upCardDto.genre)
            }).expect(HttpStatus.OK);
        })
    })
});