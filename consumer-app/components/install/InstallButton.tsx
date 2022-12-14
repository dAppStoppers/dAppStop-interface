import { normalizeResponsiveValue } from "@rainbow-me/rainbowkit/dist/css/sprinkles.css";
import { useNetwork } from "wagmi";
import { transformIpfsLinkToGateway } from "../../lib/transformIpfsLinkToGateway";

export interface InstallButtonProps {
  priceInEth: number;
  purchaseNft: boolean;
  ipfsUri: string;
}

function installApk(ipfsUri: string) {
  const apkUri = `${transformIpfsLinkToGateway(ipfsUri)}?filename=app.apk`;
  console.log("installing apk from ", apkUri);
  window.open(apkUri);
}

export const InstallButton = ({
  priceInEth,
  purchaseNft,
  ipfsUri,
}: InstallButtonProps) => {
  const { chain } = useNetwork();

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <label
          htmlFor={purchaseNft ? "purchase-modal" : "install-modal"}
          className="btn modal-button btn-primary mt-4 mb-4"
        >
          {purchaseNft
            ? `Purchase NFT to Install (${priceInEth} ${chain?.nativeCurrency?.symbol})`
            : "Install"}
        </label>
      </div>

      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dapp name here</h3>
          <p className="py-2">
            This dapp will cost {priceInEth} ETH to purchase the NFT.
          </p>
          <div className="modal-action">
            <label htmlFor="purchase-modal" className="btn btn-primary mb-16">
              Purchase NFT
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="install-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dapp name here</h3>
          <p className="py-2">Ready to install?</p>
          <div className="modal-action">
            <label
              htmlFor="install-modal"
              className="btn btn-primary mb-16"
              onClick={() => installApk(ipfsUri)}
            >
              Install
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
