import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Request,
    UseGuards,
    Put,
    Delete,
    BadRequestException
  } from '@nestjs/common';
  import {
    CardService
  } from './card.service';
  import {
    CreateUserDto
  } from '../dto/create-user.dto';
  import {
    AuthGuard
  } from '@nestjs/passport';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
  
@Controller('cards')
export class CardController {
constructor(private readonly CardService: CardService) {}

    @Get()
    getAllMovies() {
        return this.CardService.allMovies();
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('/createCard')
    createMovie(@Body() CreateCardDto: CreateCardDto) {
      if (CreateCardDto && Object.keys(CreateCardDto).length)
        return this.CardService.createMovie(CreateCardDto);
      return null;
    }
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put('/modifyCard/:id')
    modifyMovie(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
      return this.CardService.updateMovie(id, updateCardDto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete('/deleteCard/:id')
    deleteMovie(@Param('id') id: string,) {
        return this.CardService.removeMovie(id);
    }
}