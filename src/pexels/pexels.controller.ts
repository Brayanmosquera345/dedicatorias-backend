import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { PexelsService } from './pexels.service';
import type { PhotoLocal } from './types/Photos';
import { SearchPhotosDto } from './dto/search-photos.dto';

@ApiTags('pexels')
@Controller('pexels')
export class PexelsController {
  constructor(private readonly pexelsService: PexelsService) {}

  @Get('search')
  @ApiQuery({
    name: 'query',
    required: false,
    type: String,
    description: 'Término de búsqueda (ej: naturaleza)',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Número de página',
    example: 1,
  })
  @ApiQuery({
    name: 'perPage',
    required: false,
    type: Number,
    description: 'Resultados por página',
    example: 10,
  })
  async search(@Query() query: SearchPhotosDto): Promise<PhotoLocal[]> {
    return this.pexelsService.search(query.query, query.page, query.perPage);
  }
}
