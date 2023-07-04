import { ScaleLoader } from "react-spinners";
import { useState } from "react";

const ImageLinkForm = ({onSubmit, isLoading, setIsLoading}) => {
  const [inputText,setInputText] = useState("")
  console.log("THIS IS THE CURRENT STATE " + isLoading)
  return (
    <div className="flex flex-col justify-center items-center">
        <p className="p-5 font-bold text-gray-100">
            {"This app will detect faces in your pictures, try it now!"}
        </p>
        <div className="flex gap-4 justify-center items-center">
          <input type="text" onChange={(event)=>{setInputText(event.target.value)}} placeholder="Image url" className="p-2 w-[25vw] font-bold rounded max-w-[500px]"/>
          <button onClick={()=> {
            onSubmit(inputText)
            setIsLoading(true)
          }} className= {"flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded h-[40px] active:bg-blue-800 hover:bg-blue-700"}>{isLoading ? <ScaleLoader height={25} color="#ffffff"/>: "Detect" }</button>
        </div>
    </div>
  )
}


export default ImageLinkForm;