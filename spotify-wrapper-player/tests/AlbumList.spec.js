import 'jsdom-global/register';

import { expect } from 'chai';
import renderAlbums from '../src/AlbumList';

describe('Render AlbumList', () => {
  it('should exist', () => {
    expect(renderAlbums).to.exist;
  });

  const data = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Kings of leon',
        },
      ],
      id: '3mZir9E3dueqyt15RIdxnf',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/bd21447c72eb79021da04b8f949906c552bc505a',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/87d268cf13849b42e1cf1fb82222c368318427c1',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/740c43f9f3d13e98ac2699f83b1bce4b689eb119',
          width: 64,
        },
      ],
      name: 'Waste A Moment (Live)',
      type: 'album',
    },
  ];
  const markup = `
  <div class="list-item">
  <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
  <div class="list-description">
    <p class="list-title">${data[0].name}</p>
    <p class="list-subtitle">${data[0].artists[0].name}</p>
  </div>
  </div>`;

  const data2 = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Kings of leon',
        },
      ],
      id: '3mZir9E3dueqyt15RIdxnf',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/bd21447c72eb79021da04b8f949906c552bc505a',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/87d268cf13849b42e1cf1fb82222c368318427c1',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/740c43f9f3d13e98ac2699f83b1bce4b689eb119',
          width: 64,
        },
      ],
      name: 'Waste A Moment (Live)',
      type: 'album',
    },
    {
      album_type: 'album',
      artists: [
        {
          name: 'Kings of leon',
        },
      ],
      id: '3mZir9E3dueqyt15RIdxnf',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/bd21447c72eb79021da04b8f949906c552bc505a',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/87d268cf13849b42e1cf1fb82222c368318427c1',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/740c43f9f3d13e98ac2699f83b1bce4b689eb119',
          width: 64,
        },
      ],
      name: 'Waste A Moment (Live)',
      type: 'album',
    },
  ];

  const markup2 = `
  <div class="list-item">
  <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
  <div class="list-description">
    <p class="list-title">${data[0].name}</p>
    <p class="list-subtitle">${data[0].artists[0].name}</p>
  </div>
  </div>
  <div class="list-item">
  <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
  <div class="list-description">
    <p class="list-title">${data[0].name}</p>
    <p class="list-subtitle">${data[0].artists[0].name}</p>
  </div>
  </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
  it('should create and append when more than 1 album', () => {
    const element2 = document.createElement('div');
    renderAlbums(data2, element2);
    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
