export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer BQBlv1tZDdOly4-AToB2vN0sIkulygycFheBWBANXNdreu_EgrYwnt8ngSelcFS7jJBTULIAZ7syO3iwEN-LD7KYs4wRgelMiwkMW1kZcMp9D4xkeFK2ql1pRUIogFF-nge1C85U0JqFxYRGypuMa7ETVS5EHv4PHShQELXCFQosTydUAX0L-vl9IjTRr_u6SP8Pt5OJfc-_vQjOUTmY4WBMfwhfwhfnv6H0AJPCCPMEC2_grKNN_M5JYk95AXtFvATy1c0quGruvRJdDhNw754FK58',
    },
  }).then(data => data.json());

export const searchArtists = query => search(query, 'artist');
export const searchAlbums = query => search(query, 'albums');
export const searchTracks = query => search(query, 'tracks');
export const searchPlaylists = query => search(query, 'playlist');
