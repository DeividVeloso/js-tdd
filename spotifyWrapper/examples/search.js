import SpotifyWrapper from '../src';

global.fetch = require('node-fetch');

const token =
  'BQAqWtknzxSKNaUp0k7K0oyx9K7_2gw-bZLwNvvr0qTT_XdN8Wbn1lDtaDAV1TvgnXLkfYJIq4flypnygshxUI_SLXxXHRQBd_-92B7Xa1Q6q9y_CsX72NJAnukj1lEXpVd7lR6ndDEr8q8Yki3h0kLMScV7sxhlZD7SoXZTWFWgwPnVj3rhlGtF1d_K86X4vzjglY-KSyv27uxQriPZjS6IzEqROKxBNRUhjGQTtxwnGsP3S-s8bUYRpGSIobCDAaHf8hp1YyvL4cZTyhLIcixa7XY';
const spotify = new SpotifyWrapper({
  token
});

const albums = spotify.search.albums('Kings of leon');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
