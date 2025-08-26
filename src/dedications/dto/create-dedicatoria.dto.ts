import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDedicatoriaDto {
  @ApiProperty({ required: true, description: 'Mensaje personalizado de la dedicatoria' })
  @IsString()
  message!: string;

  @ApiProperty({ required: true, description: 'Nombre de la persona que envía la dedicatoria' })
  @IsString()
  author!: string;

  @ApiProperty({ required: false, description: 'ID de la canción seleccionada desde Spotify' })
  @IsOptional()
  @IsString()
  song_id?: string;

  @ApiProperty({ required: false, description: 'Nombre de la canción seleccionada' })
  @IsOptional()
  @IsString()
  song_name?: string;

  @ApiProperty({ required: false, description: 'Nombre del artista o banda' })
  @IsOptional()
  @IsString()
  artist?: string;

  @ApiProperty({
    required: false,
    description: 'URL del preview de 30 segundos proporcionada por Spotify',
  })
  @IsOptional()
  @IsString()
  preview_url?: string;

  @ApiProperty({ required: false, description: 'URL de la carátula del álbum desde Spotify' })
  @IsOptional()
  @IsString()
  image_cancion?: string;

  @ApiProperty({
    required: false,
    description:
      'URL de la imagen de fondo para la dedicatoria. Puede ser de Unsplash, Pexels o una URL personalizada',
  })
  @IsOptional()
  @IsString()
  image?: string;
}
