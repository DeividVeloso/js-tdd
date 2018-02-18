(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(1);

var _albums = __webpack_require__(2);

module.exports = {
  search: _search.search,
  searchArtists: _search.searchArtists,
  searchAlbums: _search.searchAlbums,
  searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _albums.getAlbum,
  getAlbums: _albums.getAlbums,
  getAlbumTracks: _albums.getAlbumTracks
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var search = exports.search = function search(query, type) {
  return fetch('https://api.spotify.com/v1/search?q=' + query + '&type=' + type, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer BQBlv1tZDdOly4-AToB2vN0sIkulygycFheBWBANXNdreu_EgrYwnt8ngSelcFS7jJBTULIAZ7syO3iwEN-LD7KYs4wRgelMiwkMW1kZcMp9D4xkeFK2ql1pRUIogFF-nge1C85U0JqFxYRGypuMa7ETVS5EHv4PHShQELXCFQosTydUAX0L-vl9IjTRr_u6SP8Pt5OJfc-_vQjOUTmY4WBMfwhfwhfnv6H0AJPCCPMEC2_grKNN_M5JYk95AXtFvATy1c0quGruvRJdDhNw754FK58'
    }
  }).then(function (data) {
    return data.json();
  });
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'albums');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'tracks');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = __webpack_require__(3);

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id).then(function (data) {
    return data.json();
  });
}; // const Albums = () => {
//   const getAlbum = () => {};

//   return {
//     getAlbum
//   }
// }
// export default Albums
var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums/?ids=' + id).then(function (data) {
    return data.json();
  });
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks() {
  return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(function (data) {
    return data.json();
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = exports.API_URL = 'https://api.spotify.com/v1';

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map