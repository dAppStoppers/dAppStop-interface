import { ChangeLogItem, ChangeLogItemProps } from "./ChangeLogItem";

export interface ChangeLogProps {
  changeLogItems: ChangeLogItemProps[];
}

export const ChangeLog = ({ changeLogItems }: ChangeLogProps) => {
  return (
    <>
      <h1 className="text-lg font-bold mt-4">Changelog</h1>
      {changeLogItems.map((changeLogItem) => (
        <ChangeLogItem key={changeLogItem.versionNumber} {...changeLogItem} />
      ))}
    </>
  );
};
