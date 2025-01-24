import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../redux/user/userSlice";
import Modal from "./Modal/Modal";
import { useNavigate } from "react-router-dom";

const DashProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({});

  const updateCredentials = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      return;
    }

    try {
      dispatch(updateStart());
      const userID = currentUser._id;
      const res = await fetch(`/api/user/update/${userID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(updateFailure(data.message));
      }
      dispatch(updateSuccess(data));
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  };

  const handleSignout = async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("persist:root"); // Or specific key where JWT is stored
    localStorage.removeItem("jwt_token");
    navigate("/signin");
  };

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(currentUser._id);
  return (
    // <div className="flex flex-1 justify-center mt-[80px] md:mt-[120px] p-3">
    //   <div className="flex flex-col gap-4 border-2 border-[#333232] bg-[#1F1F1F] text-white flex-1 max-w-[600px] h-fit p-12 rounded-3xl">
    //     <div className="flex flex-col gap-4 text-3xl md:text-4xl text-center items-center">
    //       <p>Profile</p>
    //       <div className="bg-black rounded-full border-3 border-gray-800 p-4">
    //         <MdPerson className="md:w-[120px] w-[60px] md:h-[120px] h-[60px]" />
    //       </div>
    //     </div>
    //     <form className="flex flex-col gap-4">
    //       <input
    //         placeholder="Username"
    //         type="text"
    //         id="username"
    //         className="inpt"
    //         onChange={handleChange}
    //       />
    //       <input
    //         placeholder="Email"
    //         type="email"
    //         id="email"
    //         className="inpt"
    //         onChange={handleChange}
    //       />
    //       <input
    //         placeholder="Password"
    //         type="password"
    //         id="password"
    //         className="inpt"
    //         onChange={handleChange}
    //       />
    //       <button className="btn">Update</button>
    //       <div className="flex justify-between text-red-600 font-semibold ">
    //         <p className="hover:text-red-700">Delete Account</p>
    //         <p className="hover:text-red-700">Sign out</p>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="flex flex-1 justify-center mt-[80px] md:mt-[120px] p-3">
      <div className="flex flex-col gap-4 border-2 border-[#333232] bg-[#1F1F1F] text-white flex-1 max-w-[600px] h-fit p-12 rounded-3xl">
        <div className="flex flex-col gap-4 text-3xl md:text-4xl text-center items-center">
          <p>Profile</p>
          <div className="bg-black rounded-full border-3 border-gray-800 p-4">
            <MdPerson className="md:w-[120px] w-[60px] md:h-[120px] h-[60px]" />
          </div>
        </div>
        <form onSubmit={updateCredentials} className="flex flex-col gap-4">
          <input
            placeholder="Username"
            type="text"
            id="username"
            className="inpt"
            onChange={handleChange}
            defaultValue={currentUser.username}
          />
          <input
            placeholder="Email"
            type="email"
            id="email"
            className="inpt"
            onChange={handleChange}
            defaultValue={currentUser.email}
          />
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="inpt"
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Update
          </button>
        </form>
        <div className="flex justify-between text-red-600 font-semibold ">
          <Modal />
          <span onClick={handleSignout} className="hover:text-red-700">
            Sign out
          </span>
        </div>
        {errorMessage && (
          <div className="w-full bg-red-300 font-semibold text-[#ff3333] p-4 rounded-xl">
            {errorMessage}s
          </div>
        )}
      </div>
    </div>
  );
};

export default DashProfile;
