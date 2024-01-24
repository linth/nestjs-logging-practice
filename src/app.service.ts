import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    // option 2: 測試使用依賴注入方式 logging.
    @Inject('UsersLogger')
    private readonly logger: Logger,    
  ) {}
  
  getHello(): string {
    
    // 'log', 'error', 'warn', 'debug', 'verbose'
    this.logger.log('first DI log information.');
    this.logger.error('first DI error information.');
    this.logger.warn('first DI warn information.');
    this.logger.debug('first DI debug information.');
    this.logger.verbose('first DI verbose information.');

    // TODO: option 3: 增加 custom logging.

    return 'Hello World!';
  }
}
