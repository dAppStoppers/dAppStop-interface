import { DappCard, DappCardProps } from "./dappCard";

const dappInfoSample: DappCardProps = {
  imgSrc: "https://placeimg.com/400/225/arch",
  name: "Call of Duty Mobile Season 7",
  rating: 4.5,
};

export const DappList = () => {
  return (
    <>
      <ul>
        <DappCard {...dappInfoSample} />
        <DappCard {...dappInfoSample} />
        <DappCard {...dappInfoSample} />
      </ul>
    </>
  );
};
