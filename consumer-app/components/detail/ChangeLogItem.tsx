export interface ChangeLogItemProps {
  date: string;
  description: string;
  versionNumber: string;
}

export const ChangeLogItem = ({
  date,
  description,
  versionNumber,
}: ChangeLogItemProps) => {
  return (
    <>
      <h1 className="font-bold mt-3">
        Version {versionNumber} -- {date}
      </h1>
      <p>{description}</p>
    </>
  );
};
