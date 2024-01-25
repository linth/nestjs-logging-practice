import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
      // 'log', 'fatal', 'error', 'warn', 'debug', and 'verbose'.
      // logger: ['error', 'warn'],

      logger: ['log', 'error', 'warn', 'debug', 'verbose'],
      // bufferLogs: true,
    });

  // app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
