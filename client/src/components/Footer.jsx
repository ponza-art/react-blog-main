import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border-t-4 border-teal-500">
      <div className="w-full max-w-7xl mx-auto py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Blog Name */}
          <Link
            to="/"
            className="text-xl font-bold text-white"
          >
            <span className="px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
              React-Blog
            </span>
          </Link>

          {/* Copyright Info */}
          <div className="mt-4 sm:mt-0">
            <Footer.Copyright
              href="#"
              by="React-Blog"
              year={new Date().getFullYear()}
              className="text-gray-900"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
