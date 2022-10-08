import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Chain } from "wagmi";

export const rainbowWeb3AuthConnector = ({ chains }: { chains: Chain[] }) => ({
  id: "web3auth",
  name: "Web3Auth",
  iconUrl: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
  iconBackground: "#fff",
  createConnector: () => {
    const connector = new Web3AuthConnector({
      chains: chains,
      options: {
        enableLogging: true,
        clientId:
          "BONXAIAsHEXSHuEpA5kGei87cF8CXcvZIyRQuVgveMEEatHhJe7MeQTWcsq-kylSTBRuYiJkdu3fZcG4fv-O8OI", // Get your own client id from https://dashboard.web3auth.io
        network: "testnet",
        chainId: "0x1",
        socialLoginConfig: {},
      },
    });
    return {
      connector,
    };
  },
});
