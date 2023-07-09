import { useEffect, useRef, useState } from "react"
import useResizeObserver from "@react-hook/resize-observer"

const FaceRecognition = ({imgURL, imgData}) => {
  const [imgSize, setImgSize] = useState({w: 0, h:0})
  const imgAdaptiveSize = useRef(null)
  const ImageSizeObserver = useResizeObserver(imgAdaptiveSize, (element)=>{
    setImgSize({w: Math.round(element.contentRect.width), h: Math.round(element.contentRect.height)})
    })

  return (
        <div className="flex gap-4 justify-center items-center">
             <div className="max-w-[60vw] relative">
                <img className="z-[-1] rounded" ref={imgAdaptiveSize} src={imgURL} alt=""/>
                <FaceRectangle imgData={imgData} newImgSize={imgSize}/>
            </div>
        </div>
  )
}

const FaceRectangle = ({imgData, newImgSize}) => {
    if(Object.keys(imgData).length == 0 || newImgSize.w === 0) 
        return null
    const faces = imgData.faces
    const boxFace = faces.map((face, index) => {
        const width = Math.round(face.w* newImgSize.w*0.01 + 10)
        const height = Math.round(face.h* newImgSize.h*0.01+ 10)
        const tx = Math.round(face.center.x* newImgSize.w*0.01 - width/2)
        const ty = Math.round(face.center.y* newImgSize.h*0.01 - height/2)
        
        return(
         <div key={index} id={`FaceBoxID-${index}`} style={{width: width, height : height,
          transform: `translate(${tx}px, ${ty}px)`}}
          className={`absolute top-0 left-0 z-0 w-full h-full bg-transparent rounded border-blue-700 border-[6px]`}>
         </div>
        )
    })
    return(
        <>
        {
            boxFace
        /* add rectangle positioning and resizing logic for each face coming from imgData, get properties as follow : 
        imgData.img => has 2 properties, "w" for width of img and "h" for height of img in pixels    
        imgData.faces => an array of faces detected in the image, from 0 to n faces, each face has 3 props : 
        center : coords in image percentages for the center of the face
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