import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message, MessageSchema } from './message.schema';
import { ChatGateway } from './chat.gateway';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.xgqw7as.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
    }),
  ],
  providers: [ChatGateway],
})
export class AppModule {}
