export interface CeramicPayload {
  title: string;
  description: string;
  appIconUrl: string;
  previewImageUrls: string[];
  chain: "Polygon" | "Optimism" | "Klaytn";
  category: "Game" | "Dapp";
  apkUrl: string;
  tokenGated: boolean;
  price: string;
}
