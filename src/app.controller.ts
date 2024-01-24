import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
// import { MyLogger } from './MyLogger/MyLogger.service';

@Controller()
export class AppController {
  // option 1: 使用 new object 方式來建立 logging.
  logger: Logger = new Logger(AppController.name, {timestamp: true});
  // mylogger: MyLogger = new MyLogger();
  

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    // 'log', 'error', 'warn', 'debug', 'verbose'
    this.logger.log('first log information.');
    this.logger.error('first error information.');
    this.logger.warn('first warn information.');
    this.logger.debug('first debug information.');
    this.logger.verbose('first verbose information.');

    // TODO: option 2: 測試使用依賴注入方式 logging.

    // TODO: 測試 custom logging.
    // this.mylogger.log('first mylogger log information.');
    // this.mylogger.error('first mylogger error information.');
    // this.mylogger.warn('first mylogger warn information.');
    // this.mylogger.debug('first mylogger debug information.');
    // this.mylogger.verbose('first mylogger verbose information.');

    // this.logger.log(`mylogger ${this.mylogger.error}`, );

    return this.appService.getHello();
  }
}
