"use client";

import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import {
  FiLogIn,
  FiUserCheck,
  FiLogOut,
  FiList,
  FiCalendar,
  FiMenu,
  FiX,
  FiPlus,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = authClient.useSession();
  console.log("Session Data:", data);
  const user = data?.user;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50 py-3">
      <div className="flex justify-between items-center container mx-auto px-4">
        {/* Logo and Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-600 dark:text-zinc-300 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          >
            StudyNook
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        {/* Public Links */}
        <div className="hidden md:block">
          {" "}
          <ul className="flex items-center gap-8 font-medium text-sm text-zinc-600 dark:text-zinc-300">
            <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Link href="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {" "}
          {/* Theme Switch Button */}
          <ThemeSwitch />
          {user ? (
            /* User Profile Dropdown (when user is logged in) */
            <div className="relative group">
              {/* User Avatar */}
              <div className="cursor-pointer py-1">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("") || "US"}
                  </Avatar.Fallback>
                </Avatar>
              </div>

              {/* User Profile Dropdown */}
              <div className="absolute right-0 mt-1 w-56 invisible opacity-0 scale-95 origin-top-right md:group-hover:visible md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-200 ease-out z-50 hidden md:block">
                <div className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl backdrop-blur-lg">
                  {/* User's Name and Email */}
                  <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-1.5">
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                      {user?.name}
                    </p>
                    <p className="text-xs text-zinc-400 truncate">
                      {user?.email}
                    </p>
                  </div>

                  {/* User Actions */}
                  <div className="flex flex-col gap-0.5">
                    <Link
                      href="/add-room"
                      className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all"
                    >
                      <FiPlus className="w-4 h-4" />
                      <span>Add Room</span>
                    </Link>

                    <Link
                      href="/my-listings"
                      className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all"
                    >
                      <FiList className="w-4 h-4" />
                      <span>My Listings</span>
                    </Link>

                    <Link
                      href="/my-bookings"
                      className="flex items-center gap-2.5 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all"
                    >
                      <FiCalendar className="w-4 h-4" />
                      <span>My Bookings</span>
                    </Link>

                    {/* Divider */}
                    <div className="border-t border-zinc-100 dark:border-zinc-800 my-1.5" />

                    {/* Log Out Button */}
                    <button
                      onClick={async () => await authClient.signOut()}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl w-full text-left transition-all"
                    >
                      <FiLogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-medium rounded-xl border-black/10 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <FiLogIn />
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="sm"
                  className="font-medium rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-500 shadow-indigo-600/20 active:scale-95 transition-transform"
                >
                  <FiUserCheck />
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl p-5 flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200 z-40">
          {/* Global Links */}
          <div className="flex flex-col gap-3 font-medium text-base text-zinc-700 dark:text-zinc-300">
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/"
              className="hover:text-indigo-600 px-2 py-1.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/rooms"
              className="hover:text-indigo-600 px-2 py-1.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              Rooms
            </Link>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800 my-1" />

          {/* User-Specific Content */}
          {user ? (
            /* If user is logged in, show dashboard links inside the mobile menu */
            <div className="flex flex-col gap-2">
              <div className="px-2 pb-2">
                <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  {user?.name}
                </p>
                <p className="text-xs text-zinc-400">{user?.email}</p>
              </div>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/add-room"
                className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl"
              >
                <FiPlus className="w-4 h-4" /> Add Room
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/my-listings"
                className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl"
              >
                <FiList className="w-4 h-4" /> My Listings
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/my-bookings"
                className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-xl"
              >
                <FiCalendar className="w-4 h-4" /> My Bookings
              </Link>
              <button
                onClick={async () => await authClient.signOut()}
                className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl w-full text-left"
              >
                <FiLogOut className="w-4 h-4" /> Log Out
              </button>
            </div>
          ) : (
            /* If user is not logged in, show full-width (Full width) buttons at the bottom of the mobile drawer */
            <div className="flex flex-col gap-3">
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/login"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full font-medium rounded-xl border-black/10 dark:border-white/20"
                >
                  <FiLogIn /> Login
                </Button>
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/register"
                className="w-full"
              >
                <Button className="w-full font-medium rounded-xl bg-indigo-600 text-white shadow-md">
                  <FiUserCheck /> Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
