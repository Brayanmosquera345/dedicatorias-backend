import { Module } from '@nestjs/common';
import { DedicationsController } from './dedications.controller';
import { DedicationsService } from './dedications.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [DedicationsController],
  providers: [DedicationsService],
  imports: [PrismaModule],
})
export class DedicationsModule {}
