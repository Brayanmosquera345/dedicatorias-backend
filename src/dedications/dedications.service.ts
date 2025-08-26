import { Injectable } from '@nestjs/common';
import { CreateDedicatoriaDto } from './dto/create-dedicatoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DedicationsService {
  constructor(private prisma: PrismaService) {}

  async create(createDedicatoriaDto: CreateDedicatoriaDto) {
    return await this.prisma.dedication.create({
      data: createDedicatoriaDto,
    });
  }

  async findAll() {
    const dedicatorias = await this.prisma.dedication.findMany();
    return dedicatorias;
  }

  async findOne(id: number) {
    const dedicatoria = await this.prisma.dedication.findUnique({
      where: {
        id,
      },
    });
    return dedicatoria;
  }
}
