import type { Song, SongDeezer } from '../types/Song';

export function songAdapter(songDeezer: SongDeezer): Song {
  return {
    id: songDeezer.id,
    title: songDeezer.title,
    song_url: songDeezer.preview,
    artist: songDeezer.artist.name,
    image: songDeezer.album.cover,
  };
}
