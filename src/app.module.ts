import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './Users/user.module';
import { AuthModule } from './auth/auth.module';
import { CardModule } from './movie/card.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jimi:MouAyou1234...@cluster0.ra8vqki.mongodb.net/?retryWrites=true&w=majority'),
    UserModule,
    AuthModule,
    CardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
