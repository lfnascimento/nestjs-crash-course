import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
  
  const docConfig = new DocumentBuilder().setTitle('Nest API')
    .setDescription('Nest API Tuntz tuntz')  
    .setVersion('0.1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup('/', app, document);
  await app.listen(3000);
}
bootstrap();
