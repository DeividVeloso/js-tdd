import "jsdom-global/register";

import { expect } from "chai";
import renderAlbumInfo from "../src/AlbumInfo";

describe("AlbumInfo", () => {
  const data = {
    album_type: "album",
    artists: [
      {
        name: "Kings of leon"
      }
    ],
    id: "3mZir9E3dueqyt15RIdxnf",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/bd21447c72eb79021da04b8f949906c552bc505a",
        width: 640
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/87d268cf13849b42e1cf1fb82222c368318427c1",
        width: 300
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/740c43f9f3d13e98ac2699f83b1bce4b689eb119",
        width: 64
      }
    ],
    name: "Waste A Moment (Live)",
    type: "album",
    tracks: {
        total: 18
    }
  };
  const markup = `
        <img class="album-image" src="https://i.scdn.co/image/bd21447c72eb79021da04b8f949906c552bc505a" alt="Waste A Moment (Live)">
        <p class="album-title">Waste A Moment (Live)</p>
        <p class="album-artist">Kings of leon</p>
        <p class="album-counter">18 Músicas</p>
    `;

  it("should create and append the markup given a correct data", () => {
    const element = document.createElement("div");
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });
});
