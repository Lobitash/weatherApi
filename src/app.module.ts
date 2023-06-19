import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { AuthModuleModule } from './users/users.module';
import { CityModule } from './city/city.module';
import { WeatherModule } from './weather/weather.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
//import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/weatherApp'),
    // AuthModule,
    CityModule,
    WeatherModule,
    UserModule,
    //AuthModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
