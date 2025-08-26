import { Module } from '@nestjs/common';
import { DeezerService } from './deezer.service';
import { DeezerController } from './deezer.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [DeezerController],
  providers: [DeezerService],
})
export class DeezerModule {}
