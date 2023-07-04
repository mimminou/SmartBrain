const FaceRecognition = ({imgURL, imgData}) => {
  
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
            <img className="max-w-[60vw] rounded" src={imgURL} alt="" srcset="" />
            <FaceRectangle imgData={imgData}/>
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
        console.log(imgData)
    )
}

export default FaceRecognition;