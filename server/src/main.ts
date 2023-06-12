import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useWebSocketAdapter(new WsAdapter(app));
  // app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  // Swagger API documentation setup
  // const options = new DocumentBuilder()
  //   .setTitle('Chat API')
  //   .setDescription('API for the chat application')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log('Server started on http://localhost:3000', 'Bootstrap');
}

bootstrap();
