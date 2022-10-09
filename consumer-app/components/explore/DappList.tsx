import Carousel_ from "../carousel.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DappCardListed from "./DappCardListed";
import { CeramicPayload } from "../../lib/schemas/ceramicPayload";

interface DappListProps {
  dapps: CeramicPayload[];
}

export const DappList = ({ dapps }: DappListProps) => {
  return (
    <div className="flex flex-col space-y-4 pb-20">
      <Carousel_ dapps={dapps} />
      <DappCardListed />
    </div>
  );
};
