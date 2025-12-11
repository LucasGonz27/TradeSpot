import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  const config = new DocumentBuilder()
  .setTitle('ApiTradeSpot')
  .setDescription('API REST TradeSpot pour une place de marché auto : publication et gestion d’annonces, achat/vente de véhicules, messagerie entre acheteurs et vendeurs, et suivi des négociations en toute sécurité')
  .setVersion('1.0')
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Swagger', app, documentFactory);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
