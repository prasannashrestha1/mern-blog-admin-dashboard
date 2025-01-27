import React from "react";
import { FileInput, Select } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  return (
    <div className=" text-white flex flex-col w-full m-4 mx-auto gap-4 rounded-3xl border-2 border-[#797979] bg-[#4d4d4d] text-center max-w-[800px] p-6 md:p-8">
      <h1 className="font-semibold text-4xl ">Create a post</h1>
      <div className="flex flex-col md:flex-row justify-between gap-3 w-full">
        <input
          type="text"
          className="inpt flex-1"
          placeholder="title"
          required
        />
        <Select
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            border: "#333232",
            height: "100%",
          }}
        >
          <option value="uncategorized">Select a category</option>
          <option value="javascript">Javascript</option>
          <option value="reactjs">React.js</option>
          <option value="Express">Express</option>
        </Select>
      </div>
      <div className="flex gap-4 items-center justify-between border-2 w-full p-4 border-white border-dotted">
        <FileInput
          type="file"
          accept="image/*"
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            border: "#333232",
            height: "100%",
          }}
        />
        <button className="btn ">Upload Image</button>
      </div>
      <ReactQuill
        theme="snow"
        className="h-72 mb-12 "
        placeholder="write something"
        required
      />
      <button className="bg-[#222222] hover:bg-[#000000] border border-[#797979] cursor-pointer p-2 rounded-2xl font-semibold">
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
