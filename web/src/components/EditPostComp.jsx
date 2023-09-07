import React from "react";

const EditPostComp = () => {
  return (
    <div className=" my-3 max-w-3xl">
      <div className=" border-green-500 border-2 p-3">
        <h2 className=" text-3xl font-medium">title</h2>
        <p className=" text-lg my-3">text</p>
        <div className=" flex gap-x-3">
          <button className=" text-blue-400 text-lg">Save</button>
          <button className=" text-red-500 text-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditPostComp;
