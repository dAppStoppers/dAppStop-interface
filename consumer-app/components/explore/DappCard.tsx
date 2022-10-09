import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { transformIpfsLinkToGateway } from "../../lib/transformIpfsLinkToGateway";

export interface DappCardProps {
  imgSrc: string;
  name: string;
  description: string;
  rating: number;
  previewImage1: string;
  previewImage2: string;
}

export const DappCard = (dappCardProps: any) => {
  console.log("dappcardprops:", dappCardProps);

  return (
    <Link
      href={{
        pathname: "/detail",
        query: dappCardProps, // the data
      }}
    >
      <div
        className="card bg-base-100 shadow-xl mb-10 mx-6 "
        style={{ border: "4px solid rgba(255, 255, 255, 0.15) " }}
      >
        <figure>
          <img
            src={transformIpfsLinkToGateway(dappCardProps.app_icon_url)}
            alt="Dapp Image"
          />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title ">{dappCardProps.title}</h2>
          <div className="badge badge-secondary py-3">
            {4.7} <span className="pl-2">⭐</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
