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
        <div className="flex-none w-20 h-20 m-4">
          <img src={publisherIconUrl} className="rounded-box"></img>
        </div>
        <div className="flex-initial w-64 mt-6 ...">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm mt-2">{publisher}</p>
        </div>
      </div>
      <p className="ml-4">{description}</p>
      <div className="flex w-full ml-2">
        <div className="grid h-20 w-100 flex-grow card bg-base-300 rounded-box place-items-center px-2 m-1">
          Download: {downloads}
        </div>
        <div className="grid h-20 w-100 flex-grow card bg-base-300 rounded-box place-items-center px-2 m-1">
          Category: {category}
        </div>
        <div className="grid h-20 w-100 flex-grow card bg-base-300 rounded-box place-items-center px-2 m-1">
          Chains: {chains.join(", ")}
        </div>
      </div>
    </>
  );
};
