'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id).then(function (data) {
    return data.json();
  });
}; // const Albums = () => {
//   const getAlbum = () => {};

//   return {
//     getAlbum
//   }
// }
// export default Albums
var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums/?ids=' + id).then(function (data) {
    return data.json();
  });
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks() {
  return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(function (data) {
    return data.json();
  });
};