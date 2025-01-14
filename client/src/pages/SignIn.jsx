import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/img.png";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("All fields are required.");
    }
    try {
      setIsLoading(true);
      setErrorMessage(false);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message);
      }
      console.log("Response data:", data);
      setIsLoading(false);
      navigate("/Dashboard");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] pt-20 flex justify-center">
      <div className="p-6 sm:p-12 md:p-14 flex w-[1220px] bg-[#f0efef] rounded-[20px] flex-col md:flex-row md:items-center gap-2 md:gap-8 shadow-xl border-4">
        {/* left Container */}
        <div className="flex-1 ">
          <Link
            to="/"
            className="text-2xl sm:text-4xl font-semibold dark:text-white"
          >
            <span className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white mr-1">
              PB
            </span>
            Blogs
          </Link>
          <p className="text-lg font-medium md:text-xl my-6">
            This project is an demo project to build a blog app using mern stack
          </p>
        </div>

        <div className="h-[4px] md:h-full w-full md:w-[4px] bg-[#cbcaca] "></div>

        {/* right Container */}
        <div className="flex-1 ">
          <div className="text-3xl my-5 font-semibold  ">
            Signin to continue browsing
          </div>
          <form className=" flex flex-col gap-6 text-md md:text-lg font-medium">
            <div className="flex flex-col gap-2 font-semibold">
              <label>Email</label>

              <input
                placeholder="email"
                type="email"
                id="email"
                className="inpt"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <label>Password</label>
              <input
                placeholder="password"
                type="password"
                id="password"
                className="inpt"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-3">
              <button
                className="btn"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Signup"}
              </button>
              <button className="bg-red-50 rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 hover:bg-gradient-to-l p-[2px] hover:shadow-xl hover:shadow-purple-600/10 group">
                <div className="bg-white gap-2 items-center justify-center rounded-full p-1.5 transition ease-in-out duration-900 group-hover:bg-gradient-to-br group-hover:from-gray-100 group-hover:to-gray-100 font-semibol flex flex-row">
                  <FaGoogle className="w-[14px] h-[14px]" color="#1d1d1d" />{" "}
                  Continue with Google
                </div>
              </button>
            </div>
            <p>
              Already have an account?{" "}
              <Link
                className=" text-blue-400 hover:text-blue-800 hover:font-semibold"
                to="/Signin"
              >
                Signin
              </Link>
            </p>
            {errorMessage && (
              <div className="p-3 mt-6 rounded-lg bg-red-200 text-red-800 text-semibold">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
