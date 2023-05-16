import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

(async () => {
  const app = await NestFactory.create(AppModule);
  const port = await app.get(ConfigService).get<number>('BACKEND_PORT');

  app.enableCors();

  await app.listen(port || 9999).then(() => {
    Logger.log(`Server on PORT: ${port}`);
  });
})();
