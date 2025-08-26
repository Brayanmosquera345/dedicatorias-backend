import { ApiProperty } from '@nestjs/swagger';

export class ResponseSongDto {
  @ApiProperty({ required: true, description: 'ID de la canción' })
  id!: number;
  @ApiProperty({ required: true, description: 'Título de la canción' })
  title!: string;
  @ApiProperty({ required: true, description: 'URL de la canción' })
  song_url!: string;
  @ApiProperty({ required: true, description: 'Nombre del artista' })
  artist!: string;
  @ApiProperty({ required: true, description: 'URL de la imagen de la canción' })
  image!: string;
}
