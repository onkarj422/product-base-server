import { Module, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppExceptionFilter } from './app.exception.filter';
import { CorsMiddleware } from './middlewares/cors.middleware';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes('/');
  }
}
