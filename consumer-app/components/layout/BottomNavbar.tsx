import { UserIcon, HomeIcon, BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export const BottomNavbar = () => {
  const router = useRouter();
  return (
    <div className="btm-nav">
      <Link href="alerts/">
        <button className={router.pathname == "/alerts" ? "active" : ""}>
          <BellIcon
            className="h-5 w-5"
            style={{
              color: router.pathname == "/alerts" ? "#F4511E" : "white"
            }}
          />
        </button>
      </Link>

      <Link href="/">
        <button className={router.pathname == "/" ? "active" : ""}>
          <HomeIcon
            className="h-5 w-5"
            style={{
              color: router.pathname == "/" ? "#F4511E" : "white"
            }}
          />
        </button>
      </Link>

      <Link href="profile/">
        <button className={router.pathname == "/profile" ? "active" : ""}>
          <UserIcon
            className="h-5 w-5"
            style={{
              color: router.pathname == "/profile" ? "#F4511E" : "white"
            }}
          />
        </button>
      </Link>
    </div>
  );
};
