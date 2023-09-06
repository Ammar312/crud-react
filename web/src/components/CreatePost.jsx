import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Post from "./Post";

const CreatePost = () => {
  const baseURL = "http://localhost:3000";
  const [allPosts, setAllPosts] = useState([]);
  const titleInput = useRef();
  const bodyInput = useRef();
  useEffect(() => {
    async () => {
      try {
        const response = await axios.get(`${baseURL}/api/v1/posts`);
        console.log(response.data);
        setAllPosts(response.data);
      } catch (error) {}
    };
  }, []);
  const submitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/api/v1/post`, {
        title: titleInput.current.value,
        text: bodyInput.current.value,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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

      {allPosts?.map(() => {
        return <Post allPosts={allPosts} />;
      })}
    </div>
  );
};

export default CreatePost;
