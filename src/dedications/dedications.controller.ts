import { Controller, Post, Body, Get, BadRequestException, Param } from '@nestjs/common';
import { DedicationsService } from './dedications.service';
import { CreateDedicatoriaDto } from './dto/create-dedicatoria.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dedicatorias')
@Controller('dedications')
export class DedicationsController {
  constructor(private readonly service: DedicationsService) {}

  @Post()
  create(@Body() dto: CreateDedicatoriaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const dedication = await this.service.findOne(Number(id));
    if (!dedication) {
      throw new BadRequestException('Dedicatoria not found');
    }
    return dedication;
  }
}
