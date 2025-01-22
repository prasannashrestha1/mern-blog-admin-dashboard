import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="p-4 md:p-12 flex justify-center items-center bg-[#1F1F1F] border-t-2 border-gray-800">
      <div className="bg-[#1d1d1d] p-6 md:p-10 flex flex-col gap-8 text-gray-200 max-w-[1660px] border-slate-500 border-4 rounded-[24px] flex-1">
        {/* top content */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          {/* left content */}
          <div className="flex-1 ">
            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold text-white flex items-center gap-1 w-fit"
            >
              <div className=" px-3 py-2 sm:px-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white w-fit">
                PB
              </div>
              Blogs
            </Link>
          </div>
          <div className=" flex-1 text-white flex flex-row sm:justify-end gap-6 justify-between max-[520px]:flex-wrap ">
            <div className="flex flex-col gap-2 min-w-[120px]">
              <p className="text-gray-200 font-semibold mb-1">About</p>
              <p className=" hover:text-blue-400">100 Projects</p>
              <p className="hover:text-blue-400">Prasanna Blog</p>
            </div>
            <div className="flex flex-col gap-2 min-w-[120px]">
              <p className="text-gray-200 font-semibold mb-1">About Me</p>
              <p className="hover:text-blue-400">Github</p>
              <p className="hover:text-blue-400">Portfolio</p>
            </div>
            <div className="flex flex-col gap-2 min-w-[120px]">
              <p className="text-gray-200 font-semibold mb-1">Legal</p>
              <p className="hover:text-blue-400">Privacy Policy</p>
              <p className="hover:text-blue-400">Terms & conditions</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        {/* bottom content */}
        <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-4 ">
          <div className="text-sm flex-1">@ 2025 Prasanna Blog Limited</div>
          <div className="flex gap-4 flex-1 justify-end">
            <FaInstagram className="w-5 h-5" />

            <FaLinkedin className="w-5 h-5" />
            <FaFacebook className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
