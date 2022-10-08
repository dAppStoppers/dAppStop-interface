import { UserIcon, HomeIcon, BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const BottomNavbar = () => {
  return (
    <div className="btm-nav">
      <button>
        <Link href="alerts/">
          <BellIcon className="h-5 w-5" />
        </Link>
      </button>
      <button className="active">
        <Link href="/">
          <HomeIcon className="h-5 w-5" />
        </Link>
      </button>
      <button>
        <Link href="profile/">
          <UserIcon className="h-5 w-5" />
        </Link>
      </button>
    </div>
  );
};
