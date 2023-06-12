import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message, MessageSchema } from './message.schema';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.xgqw7as.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [ChatGateway],
})
export class AppModule {}
