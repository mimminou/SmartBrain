import { useEffect, useRef, useState } from "react"
import useResizeObserver from "@react-hook/resize-observer"
import { SERVER } from "../misc/Globals"

const FaceRecognition = ({imgURL, imgData,points , setPoints}) => {
  const [imgSize, setImgSize] = useState({w: 0, h:0})
  const imgAdaptiveSize = useRef(null)
  const ImageSizeObserver = useResizeObserver(imgAdaptiveSize, (element)=>{
    setImgSize({w: Math.round(element.contentRect.width), h: Math.round(element.contentRect.height)})
    })

  return (
        <div className="flex gap-4 justify-center items-center">
             <div className="max-w-[60vw] relative">
                <img className="z-[-1] rounded" ref={imgAdaptiveSize} src={imgURL} alt=""/>
                <FaceRectangle imgData={imgData} Img={imgSize} points={points} setPoints={setPoints}/>
            </div>
        </div>
  )
}

const FaceRectangle = ({imgData, Img, points, setPoints}) => {
    useEffect(() => {
        //Check if imgData even exists before trying to access it
        if (imgData && Object.keys(imgData).length > 0) {
            setPoints(imgData.faces.length + Number(points))
        }
    },[imgData]) //needed to avoid useEffect bomb, only update if "imgData" has changed, otherwise keep stuff as is
    //this is basically decoupling the front end from the backend to make the updated number not wait until a GET request is asked everytime a photo is uploaded 
    //this is also done because I made the backend responsible for updating user scores only depending on the image they sent, to avoid score manipulation
    //a score is how many faces were detected, and since the backend gets this information on it's own by analyzing the image, it can update a user's score directly
    // edit: I did not invent this, apparently it's called Optimistic UI, I mean of course someone else has done it, but cool enough
    if(Object.keys(imgData).length == 0 || Img.w === 0 ) 
        return null
    
    const faces = imgData.faces
    const boxFace = faces.map((face, index) => {
        const width = Math.round(face.w* Img.w*0.01 + 10)
        const height = Math.round(face.h* Img.h*0.01+ 10)
        const tx = Math.round(face.center.x* Img.w*0.01 - width/2)
        const ty = Math.round(face.center.y* Img.h*0.01 - height/2)
        
        return(
         <div key={index} id={`FaceBoxID-${index}`} style={{width: width, height : height,
          transform: `translate(${tx}px, ${ty}px)`}}
          className={`absolute top-0 left-0 z-0 w-full h-full bg-transparent rounded border-blue-700 border-[6px]`}>
         </div>
        )
    })
    console.log(faces.length)
    return(
        <>
        {
            boxFace
        /* add rectangle positioning and resizing logic for each face coming from imgData, get properties as follow : 
        imgData.img => has 2 properties, "w" for width of img and "h" for height of img in pixels    
        imgData.faces => an array of faces detected in the image, from 0 to n faces, each face has 3 props : 
        center : coords in image dimensions percentage for the center of the face
        w : width of the face, value is in percentages of the image width (exp : w:25 represents 25% of the image width)
        h : height of the face in percentages of the image height
        example : 
        imgData.faces[1].center : gets the center coords of the second face detected in the image
    
        TODO : iterate through all faces in imgData.faces and return a rectangle for each face, positioned accordingly to hightlight the appropriate face 
        */ 
        }
        </>
    )
}

export default FaceRecognition;