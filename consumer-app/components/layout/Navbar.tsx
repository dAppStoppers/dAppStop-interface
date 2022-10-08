import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <Link href="/">
          <img src="/icons/dappstopLogo.svg" className="h-5 pl-3" />
        </Link>
      </div>
      <div className="flex-none">
        <ConnectButton />
      </div>
    </div>
  );
};
