import React from "react";

const Post = ({ eachPost, deleteHandle }) => {
  return (
    <div className=" my-3 max-w-3xl">
      <div className=" border-green-500 border-2 p-3">
        <h2 className=" text-3xl font-medium">{eachPost.title}</h2>
        <p className=" text-lg my-3">{eachPost.text}</p>
        <div className=" flex gap-x-3">
          <button className=" text-blue-400 text-lg">Edit</button>
          <button
            className=" text-red-500 text-lg"
            onClick={() => deleteHandle(eachPost._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
