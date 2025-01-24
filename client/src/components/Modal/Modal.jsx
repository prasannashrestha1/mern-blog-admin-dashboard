import React, { useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteFailure,
  deleteStart,
  deleteSuccess,
} from "../../redux/user/userSlice";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccount = async () => {
    const user = currentUser._id;
    try {
      dispatch(deleteStart());
      const res = await fetch(`/api/user/delete/${user}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        dispatch(deleteFailure(error.message));
      } else {
        setModal(false);
        dispatch(deleteSuccess());
      }
    } catch (error) {
      setModal(false);
      dispatch(deleteFailure(error.message));
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal text-red-500 font font-semibold"
      >
        Delete Account
      </button>

      {modal && (
        <div className="modal text-white">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content border-4 border-[#333232] rounded">
            <h2 className="text-xl text-red-500 mb-2">Delete Account</h2>
            <p>
              Are you sure you want to delete your account? This action is
              irreversible
            </p>
            <div className=" w-full h-fit flex items-end justify-end gap-3 mt-6">
              <div
                onClick={toggleModal}
                className="py-2 px-4 rounded-xl border h-full border-[#333232] cursor-pointer hover:bg-[#333232]"
              >
                Cancel
              </div>
              <div
                onClick={deleteAccount}
                className="py-2 px-4 rounded-xl border border-red-500 h-full bg-red-500 hover:bg-red-600 cursor-pointer "
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
