import SpotifyWrapper from '../src';

global.fetch = require('node-fetch');

const token =
  'BQDJtmCazkwuOJ7pKOOjkTWq3b9v1J6zG5EuS-DVMYE0sTcUWna5Y3O-tU3QHj52-mjyWPXHIoYxDFOhxtOl4fQr3HKUfvUXhOKFAq5LqQRTKJ2wszbWzNA3KUUsftUz8jwsAa-DaFzYrmwBhdOGGl9cegv7S0Bimz7lHqf1YaZhKvYtGH-4FBH5FlFta35Wg9VKbfYQ0AzUt1QoEdu_gPV18vpctDof3zN-rgTWTnKWEN5qLiwIxnlLeEGKfJJAtAao-Zj2KwxgZmgFJmMO4qF-UYQ';
const spotify = new SpotifyWrapper({
  token
});

const albums = spotify.search.albums('Kings of leon');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
