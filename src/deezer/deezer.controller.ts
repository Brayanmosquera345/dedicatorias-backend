import { Controller, Get, Query } from '@nestjs/common';
import { DeezerService } from './deezer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('deezer')
@Controller('deezer')
export class DeezerController {
  constructor(private readonly deezerService: DeezerService) {}

  @Get('search')
  async search(@Query('q') query: string) {
    return await this.deezerService.search(query);
  }
}
