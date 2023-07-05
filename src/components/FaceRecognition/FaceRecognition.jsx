const FaceRecognition = ({imgURL, imgData}) => {
  
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
            <div className="max-w-[60vw] relative">
                <img className="z-[-1] rounded relative left-0 top-0 right-0 bottom-0" src={imgURL} alt=""/>
                <FaceRectangle imgData={imgData}/>
            </div>
        </div>
    </div>
  )
}

const FaceRectangle = ({imgData}) => {
    if(imgData.faceCenter == false) 
    return(
        null
    )

    return(
        <div className="absolute z-0 text-white">
             ☐ {/** random temporary box to "imitate a real facebox" */}
            {console.log(imgData)}
        </div>
    )
}

export default FaceRecognition;