import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ReactParticles from "./components/Particles/ReactParticles"
import FaceDetectionAPI from './components/ImageHandler/ImageHandler'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [imageShown, setImageShown] = useState(false)
  const [imgURL, setImgURL] = useState("")
  const [imgData, setImgData] = useState({})

  const onSubmit = async (imgURL) => {
    const result = await FaceDetectionAPI(imgURL)
    setIsLoading(false)
    setImgURL(imgURL)
    setImageShown(true)
    if (result.status == "success"){
      console.log("success")
      //get response and only harvest the data we need
      const resultImgData = {
        imgWidth : result.photos[0].width,
        imgHeight : result.photos[0].height,
        faceWidth : result.photos[0].tags[0].width, //percentage of picture width
        faceHeight : result.photos[0].tags[0].height, // percentage of picture height
        faceCenter : result.photos[0].tags.center
      }
      setImgData(resultImgData)
    }
    else {
      console.log("failed, no face was detected")
      //inform user that no face was detected in here
    }
  }

  const cleanUp = () =>{
    setImgURL("")
    setImgData({})
    setIsLoading(false)
    setImageShown(false)
  }

  return (
    <>
      <ReactParticles/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onSubmit={onSubmit} isLoading={isLoading} setIsLoading={setIsLoading} imgShown={imageShown} cleanUp={cleanUp}/>
      <FaceRecognition imgURL={imgURL} imgData={imgData} />
    </>
  )
}

export default App
