//getAlbum
//getAlbumTracks

import chai, { expect } from 'chai';
import { getAlbum, getAlbumTracks } from '../src/albums';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubFetched;
  let promise;
  beforeEach(() => {
    stubFetched = sinon.stub(global, 'fetch');
    promise = stubFetched.returnsPromise();
  });

  afterEach(() => {
    stubFetched.restore();
  });

  describe('Smoke test', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubFetched).to.have.been.calledOnce;
    });
    it('should call fetch method with correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubFetched).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
      );
      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTq');
      expect(stubFetched).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTq'
      );
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
