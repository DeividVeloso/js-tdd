import { expect } from 'chai';

import SpotifyWrapper from '../src/';

describe('Index Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });
  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla'
    });
    expect(spotify.apiURL).to.be.equal('blabla');
  });
});
