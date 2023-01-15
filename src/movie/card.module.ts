import {
    Module
} from '@nestjs/common';
import {
    MongooseModule
} from '@nestjs/mongoose';
import {
    Card,
    CardSchema
} from '../schema/movie.schema';
import {
    JwtModule
} from '@nestjs/jwt';
import {
    jwtConstants
} from '../strategy/constants';
import {
    JwtStrategy
} from '../strategy/jwt.strategy';
import { CardController } from './card.controller';
import { CardService } from './card.service';
  
@Module({
    imports: [
     MongooseModule.forFeature([{
        name: Card.name,
        schema: CardSchema
      }]),
     JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {
          expiresIn: '60d'
        },
      }),
    ],
    controllers: [CardController],
    providers: [CardService, JwtStrategy],
})
export class CardModule {}