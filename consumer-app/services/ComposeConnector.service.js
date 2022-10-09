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
    return doc.id.toString();
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
    const docs = await Promise.all(ids.map((id) => this.loader.load(id)));
    return docs.map((doc) => doc.content);
  }

  async update(id, content) {
    const doc = await TileDocument.load(this.ceramic, id);
    await doc.update(content);
  }

  //TODO: Create findOneAndUpdate Function
  //TODO: Add Schema
}

let compose = new ComposeConnector();

const MOCK_1 = {
  title: "Axie Infinity",
  description:
    "Axie Infinity is a Pokémon-inspired universe where anyone can earn tokens through skilled gameplay and contributions to the ecosystem. Players can battle, collect, raise, and build a land-based kingdom for their pets.",
  version: "1.0.0",
  app_icon_url: "ipfs://QmTuAhBKcNwBbqU1tHYYZSdVCHk6UpKiRH4Bz1nDgueyWv",
  preview_image_urls: [
    "ipfs://Qmb3vaMazxofg999F4trCpnG1wrKogK1ZdYS5vu7N4hgAn",
    "ipfs://QmPve5XSaqtFqTbkkP4igdZo9FckFiWYZ8gBFM8qqtqJeX",
  ],
  chain: "Polygon",
  category: "Game",
  apk_url: "ipfs://QmUXm57kNmkGXeFPskNgXBMxEtHBzfTwrkvDqX1iAVbFwJ",
  token_gated: false,
  price: "0.05",
};

const MOCK_2 = {
  title: "StepN",
  description: "STEPN is a Web3 running app with fun game and social elements.",
  app_icon_url: "ipfs://Qmc1ZVu92ZBHJfaWb35fAsEuSb4NRSedf4awPDcEoBpZnJ",
  version: "1.0.0",
  preview_image_urls: [
    "ipfs://QmRZ2auGbBxnYvd18sRt7DjBaan5ccSiYBoubfnFYBeHkS",
    "ipfs://QmWY2GwyXLf6x2awprx214bbkJHFXwS1uMyAWssx3m2gZD",
  ],
  chain: "Polygon",
  category: "Game",
  apk_url: "ipfs://QmawfUCJeoSP3We8cU6LA6YToAMpM3GeBrzN2PyZyWcJz6",
  token_gated: true,
  price: "0.03",
};

const MOCK_3 = {
  title: "Klaytn Knights",
  description:
    "페이스북과 EOS 에서 사랑받았던 정통 턴제 RPG 게임 Sword & Magic이 드디어 클레이튼 블록체인에 상륙했습니다!",
  version: "1.0.0",
  app_icon_url: "ipfs://QmP1by7FZVUzeNeMLgL4escD1cFzy315rkPtZ816q8xM4C",
  preview_image_urls: [
    "ipfs://QmZ3zxxXbvPvSJPnspsbCCoVKYJbdxvpPGVCgAB5FYHnAj",
    "ipfs://QmVHYDEegdRrtUrBXUCjcXVevUHW7WEHZk6AQo5tT6xqPW",
  ],
  chain: "Polygon",
  category: "Game",
  apk_url: "ipfs://QmZpmnpNrhiPYgxBQsvG2t9r31gkfM7Ld4Jf9AFpM9q7GK",
  token_gated: true,
  price: "0.03",
};

// compose.create(MOCK_1).then((id) => {
//   console.log(id);
// });

// compose.create(MOCK_2).then((id) => {
//   console.log(id);
// });

// compose.create(MOCK_3).then((id) => {
//   console.log(id);
// });

// compose.create({ test: "test" }).then((id) => {
//   compose.findOne(id).then((content) => {
//     console.log(id);
//     console.log(content);
//     compose.update(id, { test: "test2" }).then(() => {
//       compose.findOne(id).then((content) => {
//         console.log(content);
//       });
//     });
//   });
// });
