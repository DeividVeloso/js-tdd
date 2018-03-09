import { expect } from 'chai';

import SpotifyWrapper from '../src/';

describe('Index Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper();
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  })
});
