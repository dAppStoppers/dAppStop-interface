import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export interface DetailHeaderProps {
  title: string;
}

export const DetailHeader = ({ title }: DetailHeaderProps) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/">
          <ArrowLeftCircleIcon className="h-6 w-6 cursor-pointer" />
        </Link>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};
