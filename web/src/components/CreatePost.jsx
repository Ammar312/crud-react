import React, { useRef } from "react";

const CreatePost = () => {
  const titleInput = useRef();
  const bodyInput = useRef();
  const submitPost = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className=" border-2 border-purple-500 max-w-2xl">
        <form onSubmit={submitPost} className=" flex flex-col gap-2 p-4">
          <input
            className="border-2 p-2 text-lg"
            type="text"
            required
            placeholder="Title of the post"
            minLength={3}
            maxLength={30}
            ref={titleInput}
          />
          <textarea
            type="text"
            required
            placeholder="What's in your mind!"
            minLength={3}
            ref={bodyInput}
            rows="3"
            className="border-2 p-2 text-lg outline-none "
          ></textarea>
          <button type="submit" className="border-2 w-44 p-3 rounded-xl">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
