/**
 * 
 * Reference:
 *  - https://docs.nestjs.com/techniques/logger
 */
import { LoggerService, ConsoleLogger } from '@nestjs/common';


export class MyLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {}

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {};

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {}
}


// 擴展現有的logger
// export class MyLogger extends Logger {
//   error(message: string, trace: string) {
//     super.error(message, trace);
//   }
// }