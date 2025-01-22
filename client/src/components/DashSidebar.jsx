import React, { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("profile");

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const tabfromURL = urlParam.get("tab");
    console.log(tabfromURL);
    if (tabfromURL) {
      setTab(tabfromURL);
    }
  }, [location.search]);

  return (
    <div className="flex gap-1 bg-[#1F1F1F] flex-col border-r-2 border-gray-600 md:max-w-[260px] w-full p-4">
      <Link to={"/dashboard?tab=profile"}>
        <div
          className={`hover:bg-gray-800 border border-[#1F1F1F] hover:border-gray-700 flex text-center items-center gap-2 p-2 rounded-lg ${
            tab === "profile" ? "bg-gray-800 border-gray-700" : ""
          }`}
        >
          <div className="flex items-center gap-2 flex-1 text-[16px]">
            <MdPerson className="w-[24px] h-[24px]" />
            Profile{" "}
          </div>
          <div className="p-1 text-[10px] rounded-lg bg-black">user</div>
        </div>
      </Link>
      <Link to={"/dashboard?tab=signout"}>
        <div className="hover:bg-gray-800 border border-[#1F1F1F] hover:border-gray-700 flex text-center items-center gap-2 p-2 rounded-lg">
          <div className="flex items-center gap-2 flex-1 text-[16px]">
            <HiOutlineLogout className="w-[24px] h-[24px]" />
            Logout{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DashSidebar;
