import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const tabfromURL = urlParam.get("tab");
    console.log(tabfromURL);
    if (tabfromURL) {
      setTab(tabfromURL);
    } else {
      urlParam.set("tab", "profile");
      navigate(`?${urlParam.toString()}`, { replace: true });
    }
  }, [location.search, navigate]);

  return (
    <div className="flex flex-col md:flex-row text-white h-screen">
      <DashSidebar />

      {tab === "profile" ? <DashProfile /> : ""}
    </div>
  );
};

export default Dashboard;
