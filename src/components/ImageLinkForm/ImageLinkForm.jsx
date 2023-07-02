import React from "react";

const ImageLinkForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <p className="p-5 font-bold text-gray-100">
            {"This app will detect faces in your pictures, try it now!"}
        </p>
        <div className="flex gap-4 justify-center items-center">
          <input type="text" placeholder="Image url" className="p-2 w-[25vw] font-bold rounded max-w-[500px]"/>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Detect</button>
        </div>
    </div>
  )
}

export default ImageLinkForm;