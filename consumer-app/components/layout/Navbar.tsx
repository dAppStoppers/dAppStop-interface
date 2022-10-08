import {
  UserCircleIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { NotificationModal } from "../notification/NotificationModal";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <img src="/icons/dappstopLogo.svg" className="h-5" />
        </Link>
      </div>
      <div className="flex-none">
        {/* Notification bell*/}
        <label
          tabIndex={0}
          htmlFor="notification-modal"
          className="btn btn-ghost btn-circle avatar"
        >
          <BellIcon className="h-5 w-5 cursor-pointer" />
        </label>
        <NotificationModal />

        {/* Search bar */}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />
        </label>
        {/* User avatar */}
        <div className="dropdown dropdown-end">
          <Link href="profile/">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <UserCircleIcon className="h-5 w-5 cursor-pointer" />
            </label>
          </Link>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
