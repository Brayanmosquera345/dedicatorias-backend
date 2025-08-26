import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//modulos
import { DedicationsModule } from './dedications/dedications.module';
import { DeezerModule } from './deezer/deezer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DedicationsModule,
    DeezerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
