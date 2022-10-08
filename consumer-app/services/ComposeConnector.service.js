import { CeramicClient } from "@ceramicnetwork/http-client";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { TileDocument } from "@ceramicnetwork/stream-tile";
import { TileLoader } from "@glazed/tile-loader";
import { getResolver } from "key-did-resolver";

// Initialize Tile Loader by Glazed

export class ComposeConnector {
  constructor() {
    this.seed = new Uint8Array(32); // TODO: Generate Seed
    this.ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");
    this.auth(this.seed);
    this.loader = new TileLoader({ ceramic: this.ceramic });
  }

  auth(seed) {
    const provider = new Ed25519Provider(seed);
    const did = new DID({ provider, resolver: getResolver() });
    did.authenticate().then((this.ceramic.did = did));
  }

  /**
   *
   * @param {object} content
   * @returns {Promise<string>} Id of the created document
   */
  async create(content) {
    const doc = await TileDocument.create(this.ceramic, content);
    return doc.id;
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<Object>} Contents of the document
   */
  async findOne(id) {
    return (await TileDocument.load(this.ceramic, id)).content;
  }

  /**
   *
   * @param {[string]} id
   * @returns {[Promise<Object>]} Contents of the documents
   */
  async find(ids) {
    const docs = await Promise.all(ids.map((id) => loader.load(id)));
    return docs.map((doc) => doc.content);
  }

  //TODO: Create findOneAndUpdate Function
  //TODO: Add Schema
}
