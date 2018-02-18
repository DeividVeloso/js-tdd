import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai"; //Lib para conectar o Sinon com o Chai
import sinonStubPromise from "sinon-stub-promise";
chai.use(sinonChai); //Adicionando no chai o sinon
sinonStubPromise(sinon); // colocando os assets do sinon dentro do StubPromise
global.fetch = require("node-fetch"); //Habiliata para nossa interface o global fetch que é utilizado no nosso browser.

import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from "../src/search";

describe("Spotify wrapper", () => {
  let fetchedStub;
  let promise;
  beforeEach(() => {
    fetchedStub = sinon.stub(global, "fetch");
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

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
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });
    it("should receive the correct url to fetch", () => {
      context("passing one type", () => {
        const artists = search("Incubus", "artist");
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist"
        );

        const albums = search("Incubus", "album");
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=album"
        );
      });
      context("passing one type", () => {
        const artistsAdAlbums = search("Incubus", ["artist", "album"]);
        expect(fetchedStub).to.have.been.calledWith(
          "https://api.spotify.com/v1/search?q=Incubus&type=artist,album"
        );
      });
    });
    it("should return the JSON Data from the Promise", () => {
      promise.resolves({ body: "json" }); // Manda resolver a promise
      const artists = search('Incubus', 'artist'); //Chama a Promise resolvida com o valor  { body: "json" }
      //é uma verificação equal deep, verifica todas as propriedades internas
      expect(artists.resolveValue).to.be.eql({body: "json" }); //Verifica se os valores são iguais
    });
  });

  describe("searchArtists", () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce
    });
    it('should call fetch with correct URL', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const artists2 = searchArtists('Musus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')
    })
  })

  describe("searchAlbums", () => {
    it('should call fetch function', () => {
      const artists = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledOnce
    });
    it('should call fetch with correct URL', () => {
      const artists = searchAlbums('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albums')

      const artists2 = searchAlbums('Musus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=albums')
    })
  })

  describe("searchTracks", () => {
    it('should call fetch function', () => {
      const artists = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledOnce
    });
    it('should call fetch with correct URL', () => {
      const artists = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=tracks')

      const artists2 = searchTracks('Musus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=tracks')
    })
  })

  describe("searchPlaylists", () => {
    it('should call fetch function', () => {
      const artists = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledOnce
    });
    it('should call fetch with correct URL', () => {
      const artists = searchPlaylists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const artists2 = searchPlaylists('Musus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')
    })
  })
});
