import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai"; //Lib para conectar o Sinon com o Chai
import sinonStubPromise from "sinon-stub-promise";
chai.use(sinonChai); //Adicionando no chai o sinon
sinonStubPromise(sinon); // colocando os assets do sinon dentro do StubPromise
global.fetch = require('node-fetch'); //Habiliata para nossa interface o global fetch que é utilizado no nosso browser.

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from "../src/main";

describe("Spotify wrapper", () => {
  describe("Smoke testes", () => {
    it("should exist search", () => {
      expect(search).to.exist;
    });
    it("should exist searchAlbums", () => {
      expect(searchAlbums).to.exist;
    });
    it("should exist", () => {
      expect(searchArtists).to.exist;
    });
    it("should exist searchTracks", () => {
      expect(searchTracks).to.exist;
    });
    it("should exist searchPlaylists", () => {
      expect(searchPlaylists).to.exist;
    });
  });
  describe("Generic Search", () => {
    it("should call fetch function", () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
      fetchedStub.restore();
    });
    it("should receive the correct url to fetch", () => {
      const fetchedStub = sinon.stub(global, 'fetch');

      const artists = search("Incubus", 'artist');
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Incubus&type=artist")

      const albums = search("Incubus", 'album');
      expect(fetchedStub).to.have.been.calledWith("https://api.spotify.com/v1/search?q=Incubus&type=album")
      fetchedStub.restore();
    })
  });
});
