import { ScaleLoader } from "react-spinners";
import { useEffect, useState, useRef } from "react";

const ImageLinkForm = ({onSubmit, isLoading, setIsLoading, imgShown, cleanUp}) => {
  const [inputText, setInputText] = useState("")
  const inputRef = useRef(null)

  const resetInput = () =>{
    setInputText("")
    cleanUp()
  }

  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus()
    }
  },[])

  return (
    <div className="flex flex-col justify-center items-center m-8">
        <p className="p-5 font-bold text-gray-100">
            {"This app will detect faces in your pictures, try it now!"}
        </p>
        <form className="flex gap-4 justify-center items-center">
          <input type="text" ref={inputRef} onChange={(event)=>{setInputText(event.target.value)}} autoFocus value={inputText} placeholder="Image url" className="p-2 w-[25vw] font-bold rounded max-w-[500px]"/>
          <button type="submit" onClick={(event)=> {
            event.preventDefault()
            onSubmit(inputText)
            setIsLoading(true)
          }}
           
           className= {"flex items-center px-4 py-2 font-bold text-white bg-blue-500 rounded h-[40px] active:bg-blue-800 hover:bg-blue-700"}>{isLoading ? <ScaleLoader height={25} color="#ffffff"/>: "Detect" }</button>

          <RemoveImgButton imgShown={imgShown} resetInput={resetInput}/> 
        </form>
    </div>
  )
}

const RemoveImgButton = ({imgShown, resetInput}) =>{

  if(imgShown){
  return(
     <button className="flex items-center px-4 py-2 font-bold text-white bg-red-500 rounded h-[40px] active:bg-red-800 hover:bg-red-700" onClick={()=> resetInput()}>🗙</button>
  )
  }
  return null
}

export default ImageLinkForm;