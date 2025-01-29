import React, { useEffect, useRef, useState } from "react";
import { FileInput, Select } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import JoditEditor from "jodit-react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const CreatePost = () => {
  // const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const notify = (notification, not_Type) => {
    not_Type === "failure"
      ? toast.warn(notification, {
          theme: "dark",
        })
      : toast.success(notification, {
          theme: "dark",
        });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleImageUpload = async (e) => {
    if (!file) {
      return notify("No file selected", "failure");
    }

    const formData = new FormData();
    formData.append("file", file); // Ensure key matches Multer's "upload.single('file')"

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(response.url);
        notify("Image uploaded successfully!", "success");
      } else {
        notify("Upload failed!", "failure");
      }
    } catch (error) {
      console.error("Upload error:", error.message);
      notify("Upload failed!", "failure");
    }
  };

  return (
    <div className=" text-white flex flex-col mx-auto w-full shadow-xl shadow-slate-800 transition-shadow m-24 gap-8 rounded-3xl border-2 border-[#797979] bg-[#222222] text-center max-w-[900px] p-6 md:p-8">
      <ToastContainer />{" "}
      <h1 className="font-semibold text-4xl ">Create a post</h1>
      <div className="flex flex-col md:flex-row justify-between gap-3 w-full">
        <input
          type="text"
          className="inpt flex-1"
          placeholder="title"
          required
        />
        <div className=" group group-focus-within:border-[#333232] border-2 border-[#333232] rounded-lg">
          <Select
            style={{
              backgroundColor: "#1F1F1F",
              color: "white",
              border: "none",
              height: "100%",
            }}
            className=" focus:outline-none cursor-pointer"
          >
            <option value="uncategorized">Uncategorized</option>
            <option value="javascript">Javascript</option>
            <option value="reactjs">React.js</option>
            <option value="Express">Express</option>
          </Select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-2 w-full p-4 border-white border-dotted">
        <FileInput
          type="file"
          className="w-full sm:w-fit"
          accept="image/*"
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            border: "#333232",
            height: "100%",
          }}
          id="image"
          onChange={(e) => {
            setFile(e.target.files[0]); // Verify the file is being set
          }}
        />
        <img src={imageUrl} className="w-full h-40" />
        <button onClick={handleImageUpload} className="btn w-full sm:w-fit">
          Upload Image
        </button>
      </div>
      <JoditEditor
        className="text-white"
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(content) => setContent(content)} // preferred to use only this option to update the content for performance reasons
        onChange={(content) => {}}
      />
      <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer p-2 rounded-2xl font-semibold">
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
