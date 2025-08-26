import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { songAdapter } from './adapters/songAdapter';
import type { SongDeezer, Song } from './types/Song';
import { ResponseSongDto } from './dto/response-song.dto';

@Injectable()
export class DeezerService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get('URL_BASE_DEEZER') || '';
  }

  async search(query: string): Promise<ResponseSongDto[]> {
    try {
      let listaDeSongs: Song[] = [];
      if (query === '') {
        const response = await firstValueFrom(
          this.httpService.get(`${this.baseUrl}/playlist/908622995`),
        );
        listaDeSongs = response.data.tracks.data.map((song: SongDeezer) => songAdapter(song));
      } else {
        const response = await firstValueFrom(
          this.httpService.get(`${this.baseUrl}/search?q=${query}`),
        );
        listaDeSongs = response.data.data.map((song: SongDeezer) => songAdapter(song));
      }
      return listaDeSongs;
    } catch (error) {
      console.error(error);
      throw new Error('Error al buscar canciones');
    }
  }
}
