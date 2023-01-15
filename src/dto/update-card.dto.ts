import {
    PartialType
  } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { upCard } from '../entities/upCard.entity';
import { GenreType } from '../form.types';
import {
    CreateCardDto
} from './create-card.dto';
  
export class UpdateCardDto extends PartialType(CreateCardDto) {
    
}