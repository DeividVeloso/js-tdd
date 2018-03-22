"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;

// const album = () => ({
//   getAlbum: id => this.request(`${this.apiURL}albums/${id}`),
//   getAlbums: ids => this.request(`${this.apiURL}albums/?ids=${ids}`),
//   getTracks: id => this.request(`${this.apiURL}albums/${id}/tracks`)
// });

// export default album;

function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiURL + "albums/" + id);
    },
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiURL + "albums/?ids=" + ids);
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiURL + "albums/" + id + "/tracks");
    }
  };
}