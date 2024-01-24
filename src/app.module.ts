import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    {
      provide: 'UsersLogger',
      useFactory: () => {
        return new Logger('Users');
      },
    }
  ],
})
export class AppModule {

}
