import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-900/60 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 size-72 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 size-72 bg-purple-500/5 dark:bg-purple-500/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-16 pb-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-8 pb-12">
          {/* Company Info */}
          <div className="sm:col-span-1 md:col-span-1 flex flex-col gap-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-indigo-600 dark:text-indigo-400"
            >
              StudyNook
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              Your ultimate companion to find, book, and list quiet, private
              study spaces in your library.
            </p>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-wider uppercase">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li className="flex items-center gap-2.5 group">
                <FiMail className="size-4 shrink-0 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                <Link
                  href="mailto:support@studynook.com"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  support@studynook.com
                </Link>
              </li>
              <li className="flex items-center gap-2.5 group">
                <FiPhone className="size-4 shrink-0 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                <Link
                  href="tel:+8801700000000"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  +880 1700-000000
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMapPin className="size-4 shrink-0" />
                <span>Mymensingh, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4 sm:col-span-3 md:col-span-1">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/salmansahedbd"
                target="_blank"
                rel="noreferrer"
                className="size-9 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-105"
              >
                <FaFacebookF className="size-4" />
              </Link>
              <Link
                href="https://twitter.com/salmansahedbd"
                target="_blank"
                rel="noreferrer"
                className="size-9 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-white dark:hover:text-white transition-all duration-300 hover:scale-105"
              >
                <FaXTwitter className="size-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/salman-sahed/"
                target="_blank"
                rel="noreferrer"
                className="size-9 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                <FaLinkedinIn className="size-4" />
              </Link>
              <Link
                href="https://www.instagram.com/salmansahedbd/"
                target="_blank"
                rel="noreferrer"
                className="size-9 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-pink-500 hover:text-pink-500 dark:hover:text-pink-400 dark:hover:border-pink-400 transition-all duration-300 hover:scale-105"
              >
                <FaInstagram className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Divider and Copyright text */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-400 dark:text-zinc-500">
          <p>© {currentYear} StudyNook. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
