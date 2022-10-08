export interface DappInfoProps {
  category: string;
  chains: string[];
  description: string;
  downloads: number;
  publisher: string;
  publisherIconUrl: string;
  title: string;
}

export const DappInfo = ({
  category,
  chains,
  description,
  downloads,
  publisher,
  publisherIconUrl,
  title,
}: DappInfoProps) => {
  return (
    <>
      <div className="flex">
        <div className="flex-none w-14 h-14">
          <img src={publisherIconUrl}></img>
        </div>
        <div className="flex-initial w-64 ...">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm">{publisher}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="flex w-full">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center px-2 m-1">
          Downloads: {downloads}
        </div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center px-2 m-1">
          Category: {category}
        </div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center px-2 m-1">
          Chains: {chains.join(", ")}
        </div>
      </div>
    </>
  );
};
