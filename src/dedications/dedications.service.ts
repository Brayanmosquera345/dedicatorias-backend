import { Injectable } from '@nestjs/common';
import { CreateDedicatoriaDto } from './dto/create-dedicatoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeezerService } from 'src/deezer/deezer.service';

@Injectable()
export class DedicationsService {
  constructor(
    private prisma: PrismaService,
    private deezerService: DeezerService,
  ) {}

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
    const preview = await this.deezerService.getSongPreview(dedicatoria?.song_id || '');
    if (dedicatoria) {
      dedicatoria.preview_url = preview ? preview : dedicatoria?.preview_url || '';
    }
    return dedicatoria;
  }
}
