import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { FaComment, FaCommentAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/n-films.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-emerald-200 text-emerald-800"
                : "text-gray-400 hover:bg-emerald-200 hover:text-emerald-800"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/portfolio">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/portfolio"
                ? "bg-emerald-200 text-emerald-800"
                : "text-gray-400 hover:bg-emerald-200 hover:text-emerald-800"
            }`}
          >
            <div className="mr-2">
              <GrProjects className="h-5 w-5" />
            </div>
            <div>
              <p>Portfolio</p>
            </div>
          </div>
        </Link>
        <Link href="/testimonials">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/testimonials"
                ? "bg-emerald-200 text-emerald-800"
                : "text-gray-400 hover:bg-emerald-200 hover:text-emerald-800"
            }`}
          >
            <div className="mr-2">
              <FaComment className="h-5 w-5" />
            </div>
            <div>
              <p>Testimonials</p>
            </div>
          </div>
        </Link>
        <Link href="/messages">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/messages"
                ? "bg-emerald-200 text-emerald-800"
                : "text-gray-400 hover:bg-emerald-200 hover:text-emerald-800"
            }`}
          >
            <div className="mr-2">
              <FaCommentAlt className="h-5 w-5" />
            </div>
            <div>
              <p>Messages</p>
            </div>
          </div>
        </Link>
        
        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-emerald-200 text-emerald-800"
                : "text-gray-400 hover:bg-emerald-200 hover:text-emerald-800"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
