import spotify from './Spotify';
import renderAlbums from './AlbumList'
import renderAlbumInfo from './AlbumInfo'

const albums = spotify.search.albums('Kings of leon');
//Pegando o a div list do index.html
const albumList = document.getElementById('album-list');

albums.then(data => {
    return renderAlbums(data.albums.items, albumList)
})


//Pegando o album Info
const album = spotify.album.getAlbum('3DxR2xJJfAGJlbArx7wAgm');
const albumInfo = document.getElementById('album-info');

album.then(data => {
    console.log(data);
    return renderAlbumInfo(data, albumInfo)
})

