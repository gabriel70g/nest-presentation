import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import helmet from 'helmet'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


const PORT = process.env.PORT || 4000
const API_NAME =process.env.API_NAME || 'Api whitout name';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted: true
    })
  )

  app.enableCors({
    allowedHeaders: '*',
    origin: '*'
  });

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Api Ejemplo')
    .setDescription('Api Ejemplo descripción')
    .setVersion('1.0')
    .addTag('pokemon Api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, ()=> {
    Logger.log(`${API_NAME} running in port ${PORT} 😎`, 'bootstrap')
  });
}
bootstrap();
