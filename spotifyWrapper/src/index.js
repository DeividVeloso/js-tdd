import { search, searchAlbum, searchArtist, searchPlaylists } from './search';
import { getAlbum, getAlbums, getAlbumTracks } from './albums';
import API_URL from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    fetch(url, headers);
  }
}
