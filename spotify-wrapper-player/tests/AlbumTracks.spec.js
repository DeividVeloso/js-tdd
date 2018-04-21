import "jsdom-global/register";

import { expect } from "chai";
import renderAlbumTracks from "../src/AlbumTracks";

describe("AlbumTracks", () => {
  const data = [{
    "preview_url": "http://",
    "track_number": 1,
    "name": "Xoxo",
    "duration_ms": 207959
  }];

  const markup = `
    <div class="music" data-track-preview="http://">
        <p class="music-number">1</p>
        <p class="music-title">Xoxo</p>
        <p class="music-duration">207959</p>
    </div>`;

  it("should create and append the markup given a correct data", () => {
    const element = document.createElement("div");
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  const data2 = [{
    "preview_url": "http://",
    "track_number": 1,
    "name": "Xoxo",
    "duration_ms": 207959
  },{
    "preview_url": "http://",
    "track_number": 1,
    "name": "Xoxo",
    "duration_ms": 207959
  }];

  const markup2 = `
    <div class="music" data-track-preview="http://">
        <p class="music-number">1</p>
        <p class="music-title">Xoxo</p>
        <p class="music-duration">207959</p>
    </div>
    <div class="music" data-track-preview="http://">
        <p class="music-number">1</p>
        <p class="music-title">Xoxo</p>
        <p class="music-duration">207959</p>
    </div>`;

it("should create and append the markup when more than one", () => {
    const element2 = document.createElement("div");
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });

});
