import SpotifyWrapper from '../src';

global.fetch = require('node-fetch');

const token =
  'BQCr52IwMhb2PfbbJBDVZSymQ9aM_dv67ENKmem8AJbYrsDsEW0Ja8QHREqyGNsqNfDOW0zGJGo2xt7FIOyC5ha7jgemRW5TktvAHUoTe-BDONaG0tvdz5ngfY6dlAzgQw19uRTAVdqyqGjZEsJWZBPky6daqNhiWcZ5WnGRW06gO-rjMaQu6djT3xuiuCsVRS-MYJQUkDPwIpuvgJZU8fkllJLZxhvYlA71dJ1l3SEeQYeFtXUoK_mHKMhOLsfMTIXCcx3Lzna162AcuBEt8cvTBRo';
const spotify = new SpotifyWrapper({
  token
});

const albums = spotify.search.albums('Kings of leon');
albums.then(data => data.albums.items.map(item => console.log(item)));
