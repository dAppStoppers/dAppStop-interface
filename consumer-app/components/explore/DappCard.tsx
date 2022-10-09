import Link from "next/link";

export interface DappCardProps {
  imgSrc: string;
  name: string;
  rating: number;
}

const data = {
  title: "my passed in title",
  description: "here is my passed in description",
  iconUrl: "https://placeimg.com/250/180/arch",
  previewImage1: "https://placeimg.com/250/180/arch",
  previewImage2: "https://placeimg.com/250/180/arch",
};

export const DappCard = ({ imgSrc, name, rating }: DappCardProps) => {
  return (
    <Link
      href={{
        pathname: "/detail",
        query: data, // the data
      }}
    >
      <div
        className="card bg-base-100 shadow-xl mb-10 mx-6 "
        style={{ border: "4px solid rgba(255, 255, 255, 0.15) " }}
      >
        <figure>
          <img src={imgSrc} alt="Dapp Image" />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title ">{name}</h2>
          <div className="badge badge-secondary py-3">
            {rating} <span className="pl-2">⭐</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
