import React from "react";

const CenterImage = () => {
  return (
    <div className="container flex justify-center align-middle">
      <div className=" w-[855px] h-[442.5px] border-4 border-solid border-purple-600">
        <img src="src\assets\center.jpg" alt="" className="w-[100%] h-[100%] object-cover "/>
      </div>
    </div>
  );
};

export default CenterImage;
