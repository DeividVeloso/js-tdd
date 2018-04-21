import spotify from './Spotify';
import renderAlbums from './AlbumList'
import renderAlbumInfo from './AlbumInfo'
import renderAlbumTracks from './AlbumTracks'


const albumList = document.getElementById('album-list');
const albums = spotify.search.albums('Kings of leon');
albums.then(data => {
    return renderAlbums(data.albums.items, albumList)
})

//Pegando o album Info
const album = spotify.album.getAlbum('3DxR2xJJfAGJlbArx7wAgm');
const albumInfo = document.getElementById('album-info');

const albumTracks = document.getElementById('album-musics-tracks');
album
.then(data => renderAlbumInfo(data, albumInfo)) // Pegando album info
.then(data => renderAlbumTracks(data.tracks.items, albumTracks)) //Pegando album tracks


