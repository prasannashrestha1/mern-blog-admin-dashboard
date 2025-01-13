import { Alert, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.username) {
      return setErrorMessage("All fields are required.");
    }
    try {
      setIsLoading(true);
      setErrorMessage(false);
      const res = await fetch("/api/auth/signup", {
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
    <div className="min-h-screen pt-20">
      <div className="p-4 md:p-6 flex max-w-6xl mx-auto flex-col md:flex-row md:items-center gap-4">
        {/* left Container */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-1xl sm:text-4xl font-semibold dark:text-white"
          >
            <span className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white">
              PB
            </span>
            Blogs
          </Link>
          <p className="text-lg font-medium md:text-xl mt-3">
            This project is an demo project to build a blog app using mern stack
          </p>
        </div>

        {/* right Container */}
        <div className="flex-1">
          <form className=" flex flex-col gap-3 text-md md:text-lg font-medium">
            <div className="flex flex-col">
              <label>Username</label>
              <input
                placeholder="username"
                type="text"
                id="username"
                className="inpt"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label>Email</label>

              <input
                placeholder="email"
                type="email"
                id="email"
                className="inpt"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
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
                <div className="bg-white items-center justify-center rounded-full p-1.5 transition ease-in-out duration-900 group-hover:bg-gradient-to-br group-hover:from-gray-100 group-hover:to-gray-200 ">
                  Continue with Google
                </div>
              </button>
            </div>
            <p>
              Already Have a account?{" "}
              <Link
                className=" text-blue-400 hover:text-blue-800 hover:font-semibold"
                to="/Signin"
              >
                Signin
              </Link>
            </p>
          </form>
          {errorMessage && (
            <div className="p-3 mt-6 rounded-lg bg-red-200 text-red-800 text-semibold">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
