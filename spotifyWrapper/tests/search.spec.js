import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src/'

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

// Generic search with more than one type
// Search for Albums
// Search for Artists
// search for tracks
// search for Playlists

describe('Search', () => {
  let fetchedStub;
  let promise;
  let spotify;
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exist spotify.search.albums in the method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist spotify.search.artists in the method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist spotify.search.tracks in the method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist spotify.search.playlists in the method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('albums search', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('forest');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const albums = spotify.search.albums('forest');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=forest&type=album');
    });
  });

  describe('artist search', () => {
    it('should call fetch function', () => {
      const artist = spotify.search.artists('incubus');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const artist = spotify.search.artists('incubus');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist');

      const artist2 = spotify.search.artists('muse');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=muse&type=artist');
    });
  });

  describe('tracks search', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('windcrusher');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const tracks = spotify.search.tracks('windcrusher');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=windcrusher&type=tracks');

      const tracks2 = spotify.search.tracks('oily');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=oily&type=tracks');
    });
  });

  describe('playlist search', () => {
    it('should call fetch function', () => {
      const playlist = spotify.search.playlists('Sobriety');
      expect(fetchedStub).to.have.be.calledOnce;
    });

    it('should call the correct url', () => {
      const playlist = spotify.search.playlists('Sobriety');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=Sobriety&type=playlist');

      const playlist2 = spotify.search.playlists('ramdaram');
      expect(fetchedStub).to.be.calledWith('https://api.spotify.com/v1/search?q=ramdaram&type=playlist');
    });
  });
});
