export interface DappCardProps {
  imgSrc: string;
  name: string;
  rating: number;
}

export const DappCard = ({ imgSrc, name, rating }: DappCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{rating}</div>
        </h2>
      </div>
    </div>
  );
};
