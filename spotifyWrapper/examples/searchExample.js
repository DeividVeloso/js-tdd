import API_URL from '../src/config';

global.fetch = require('node-fetch');

const search = (query, type) => fetch(`${API_URL}search?q=${query}&type=${type}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer BQBsfzbwCwZ2wRNtzAtmbXxUN9HU-vrnZdkr6cWkZnv5DpDBsuQy2LeJcJTkmEryWAE_qajXnjGT4kHkPk_zhGwy3OGynOVA4iED-SBqkD7luVMmch2gPPCDWZWV5bNcTEsa87p7TUrgms9UjWTPB5UFV5gKuPC-NT6dB9O4swtUhRKbgm9_3EOodv0VA6tfqY34O2U37eLAMvQjlbspq3Tt4xufDsJggma2JV7mh0pqWoyRGYk8hFKXZoKWjBBgtATQKAKVuvYCR3LRJN72yl9gpU0',
  },
}).then(data => data.json()).then(data => console.log(data));

const albums = search('Kings of leon', 'Album');
