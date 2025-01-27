import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInSuccesss,
  signInFailure,
  signInStart,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("all fields are necessary"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        console.log("Response data:", data);
        dispatch(signInSuccesss(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="h-screen py-20 px-6 flex justify-center items-center text-white">
      <div className="p-6 sm:p-12 md:p-14 flex w-[1660px]  bg-[#383838] rounded-[20px] flex-col md:flex-row md:items-center gap-2 md:gap-8 shadow-xl border-4">
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

        <div className="h-[4px] md:min-h-full w-full md:w-[4px] bg-[#776c6c] "></div>

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
              <button className="btn" onClick={handleSubmit}>
                Sign in
              </button>
              <OAuth />
            </div>
            <p>
              Already have an account?{" "}
              <Link
                className=" text-blue-400 hover:text-blue-800 hover:font-semibold"
                to="/signup"
              >
                Sign up
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
