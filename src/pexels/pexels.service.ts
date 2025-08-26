import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createClient, PhotosWithTotalResults, ErrorResponse } from 'pexels';
import { ConfigService } from '@nestjs/config';
import { photosAdapter } from './adapters/PhotosAdapter';
import type { PhotoLocal } from './types/Photos';

@Injectable()
export class PexelsService {
  private readonly client: ReturnType<typeof createClient>;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('PEXELS_API_KEY');
    if (!apiKey) {
      throw new Error('PEXELS_API_KEY is not defined in environment variables');
    }
    this.client = createClient(apiKey);
  }

  async search(query: string, page = 1, perPage = 10): Promise<PhotoLocal[]> {
    try {
      const searchQuery = query.trim() || 'Atardecer';

      const response: PhotosWithTotalResults | ErrorResponse = await this.client.photos.search({
        query: searchQuery,
        page,
        per_page: perPage,
      });

      if ('photos' in response) {
        return response.photos.map((photo) => photosAdapter(photo));
      }

      // Si es ErrorResponse
      throw new HttpException(
        response.error ?? 'Error en la búsqueda de fotos',
        HttpStatus.BAD_REQUEST,
      );
    } catch (error) {
      console.error('Error fetching photos from Pexels:', error);
      throw new HttpException(
        'Error interno al buscar fotos en Pexels',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
