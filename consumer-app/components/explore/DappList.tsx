import Carousel_ from "../carousel.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DappCardListed from "./DappCardListed";

export const DappList = () => {
  return (
    <div className="flex flex-col space-y-4 pb-20">
      <Carousel_ />
      <DappCardListed />
    </div>
  );
};
