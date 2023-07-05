const FaceRecognition = ({imgURL, imgData}) => {

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
            <div className="max-w-[60vw] relative">
                <img className="z-[-1] rounded" src={imgURL} alt=""/>
                <FaceRectangle imgData={imgData}/>
            </div>
        </div>
    </div>
  )
}

const FaceRectangle = ({imgData}) => {
    if(Object.keys(imgData).length == 0) 
        return null

    const imgDimensions = {w : imgData.img.w, h : imgData.img.h}
    const faces = imgData.faces
    const boxFace = faces.map((face, index) => {
        const width = Math.round(face.w*imgDimensions.w*0.01 + 10)
        const height = Math.round(face.h*imgDimensions.h*0.01+ 10)
        const tx = Math.round(face.center.x*imgDimensions.w*0.01 - width/2)
        const ty = Math.round(face.center.y*imgDimensions.h*0.01 - height/2)
        
        return(
         <div key={index} id={`FaceBoxID-${index}`} style={{width: width, height : height,
          transform: `translate(${tx}px, ${ty}px)`}}
          className={`absolute z-0 bg-transparent rounded border-blue-700 border-[6px]`}>
         </div>
        )
    })
    return(
        <div className="absolute top-0 left-0 w-full h-full" >
        {/* add rectangle positioning and resizing logic for each face coming from imgData, get properties as follow : 
        imgData.img => has 2 properties, "w" for width of img and "h" for height of img in pixels    
        imgData.faces => an array of faces detected in the image, from 0 to n faces, each face has 3 props : 
        center : coords in image percentages for the center of the face
        w : width of the face, value is in percentages of the image width (exp : w:25 represents 25% of the image width)
        h : height of the face in percentages of the image height
        example : 
        imgData.faces[1].center : gets the center coords of the second face detected in the image
    
        TODO : iterate through all faces in imgData.faces and return a rectangle for each face, positioned accordingly to hightlight the appropriate face 
        */ 
        boxFace}
        </div>
    )
}

export default FaceRecognition;