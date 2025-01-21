import React from "react";
import { FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleGoogleAuth}
      className="bg-red-50 rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 hover:bg-gradient-to-l p-[2px] hover:shadow-xl hover:shadow-purple-600/10 group"
    >
      <div className="bg-white gap-2 text-black items-center justify-center rounded-full p-1.5 transition ease-in-out duration-900 group-hover:bg-gradient-to-br group-hover:from-gray-100 group-hover:to-gray-100 font-semibol flex flex-row">
        <FaGoogle className="w-[14px] h-[14px]" color="#1d1d1d" /> Continue with
        Google
      </div>
    </button>
  );
};

export default OAuth;
