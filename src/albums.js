// const Albums = () => {
//   const getAlbum = () => {};

//   return {
//     getAlbum
//   }
// }
// export default Albums
import {API_URL} from './config'
export const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`)
  .then(data =>
    data.json()
  );
};

export const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${id}`)
  .then(data =>
    data.json()
  );
};

export const getAlbumTracks = () => {
  return fetch(`${API_URL}/albums/${id}/tracks`)
  .then(data =>
    data.json()
  );
};
