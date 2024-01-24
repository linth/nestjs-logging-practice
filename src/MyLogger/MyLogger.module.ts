import { Module } from '@nestjs/common';
import { MyLogger } from './MyLogger.service';

@Module({
  providers: [MyLogger],
  exports: [MyLogger],
})
export class MyLoggerModule {

}
