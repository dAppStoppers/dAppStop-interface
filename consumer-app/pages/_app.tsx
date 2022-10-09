import Head from "next/head";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { AppProps } from "next/app";
import { Navbar } from "../components/layout/Navbar";
import { BottomNavbar } from "../components/layout/BottomNavbar";
import {
  connectorsForWallets,
  RainbowKitProvider,
  darkTheme,
  Chain,
} from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { chain, createClient, WagmiConfig, configureChains } from "wagmi";
import { rainbowWeb3AuthConnector } from "../core/auth/rainbowWeb3AuthConnector";

import { publicProvider } from "wagmi/providers/public";

// Init Klaytn Chain
const klaytn: Chain = {
  id: 8217,
  name: "Klaytn",
  network: "klaytn",
  iconUrl:
    "https://bafybeic5fcz5bwv6la7tcocgv5mswkv4eq7nfyvvd6o3cfhhqcv4rkm24e.ipfs.w3s.link/Klaytn.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY",
  },
  rpcUrls: {
    default: "https://public-node-api.klaytnapi.com/v1/cypress",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://scope.klaytn.com" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    klaytn,
    chain.polygon,
    chain.polygonMumbai,
    chain.optimism,
    chain.arbitrum,
    chain.goerli,
  ],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);
const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: "DappStop" }),
      walletConnectWallet({ chains }),
      // add web3auth wallet connector here
      rainbowWeb3AuthConnector({ chains }),
    ],
  },
]);
const wagmiClient = createClient({
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>DappStop</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider theme={darkTheme()} chains={chains}>
          <Navbar />
          <div className="container mx-auto">
            <Component {...pageProps} />
          </div>
          <BottomNavbar />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
