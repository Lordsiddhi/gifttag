import { Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [fullYear, setFullYear] = useState(new Date().getFullYear());
  return (
    <div>
      {/* footer  */}
      <footer className="bg-black body-font">
        {/* main  */}
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          {/* logo  */}
          <Link
            to="/"
            className="text-lg text-white flex flex-row items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
            </svg>
            Gift Tag
          </Link>

          {/* para  */}
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright &copy; {fullYear}
          </p>

          {/* media icon  */}
          <div className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* instagram  */}
            <Link
              className="ml-3 text-gray-100 cursor-pointer"
              to="https://www.instagram.com/gifttag9"
              target="_blank"
            >
              <Instagram className="w-5 " />
            </Link>

            {/* Phone */}
            <Link
              className="ml-3 text-gray-100 cursor-pointer"
              to="tel:+919867906644"
              target="_blank"
            >
              <Phone className="w-5 " />
            </Link>

            {/* Email */}
            <Link
              className="ml-3 text-gray-100 cursor-pointer"
              to="mailto:gifttag42@gmail.com"
              target="_blank"
            >
              <Mail className="w-5 " />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
