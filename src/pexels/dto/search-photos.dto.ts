import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchPhotosDto {
  @ApiProperty({
    description: 'Término de búsqueda (ej: naturaleza)',
    example: 'naturaleza',
  })
  @IsString()
  @IsOptional()
  query!: string;
  @ApiProperty({
    description: 'Número de página',
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  page?: number;
  @ApiProperty({
    description: 'Resultados por página',
    example: 10,
  })
  @IsNumber()
  @IsOptional()
  perPage?: number;
}
