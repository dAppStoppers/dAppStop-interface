import { DappCard, DappCardProps } from "./DappCard";

const dappInfoSample: DappCardProps = {
  imgSrc: "https://placeimg.com/400/225/arch",
  name: "Dapp Game",
  rating: 4.5
};

export const DappList = () => {
  return (
    <div className="flex flex-col space-y-4 pb-28">
      <DappCard {...dappInfoSample} />
      <DappCard {...dappInfoSample} />
      <DappCard {...dappInfoSample} />
    </div>
  );
};
