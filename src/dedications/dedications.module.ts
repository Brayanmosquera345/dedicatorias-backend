import { Module } from '@nestjs/common';
import { DedicationsController } from './dedications.controller';
import { DedicationsService } from './dedications.service';
import { PrismaModule } from '../prisma/prisma.module';
import { DeezerModule } from 'src/deezer/deezer.module';

@Module({
  controllers: [DedicationsController],
  providers: [DedicationsService],
  imports: [PrismaModule, DeezerModule],
})
export class DedicationsModule {}
