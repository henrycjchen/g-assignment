import { NestFactory } from '@nestjs/core';
import { PORT } from '@/conf/env';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
