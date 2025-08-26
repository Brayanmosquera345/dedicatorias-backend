// adapter
import { Photo as PexelsPhoto } from 'pexels';
import type { PhotoLocal } from '../types/Photos';

export function photosAdapter(photo: PexelsPhoto): PhotoLocal {
  return {
    id: photo.id,
    url: photo.src.medium,
    photographer: photo.photographer,
    width: photo.width,
    height: photo.height,
  };
}
