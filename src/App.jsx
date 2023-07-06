import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ReactParticles from "./components/Particles/ReactParticles"
import FaceDetectionAPI from './components/ImageHandler/ImageHandler'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import { useState } from 'react'
import ApiInput from './components/ApiAccess/ApiAccess'
import SignIn from './components/Signin/SignIn'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [imageShown, setImageShown] = useState(false)
  const [imgURL, setImgURL] = useState("")
  const [imgData, setImgData] = useState({})
  const [apiKey, setApiKey] = useState("")
  const [apiSecret, setApiSecret] = useState("")
  const [route, setRoute] = useState("SignIn")

  const onSubmit = async (imgURL) => {
    const result = await FaceDetectionAPI(imgURL, apiKey, apiSecret)
    setIsLoading(false)
    setImgURL(imgURL)
    setImageShown(true)
    if (result.status == "success"){
      console.log("success")
      //get response and only harvest the data we need
      setImgData(ParseResults(result))
    }
    else {
      console.log("failed, no face was detected")
      setImgData({})
      //inform user that no face was detected in here
    }
  }

  const ParseResults = (resultJSON) => {
    const imgprops = {w : resultJSON.photos[0].width, h : resultJSON.photos[0].height}
    const tags = resultJSON.photos[0].tags
    const faces = []
    tags.forEach((face, index) =>{
      faces[index] = {center : face.center, w : face.width, h : face.height}
    })
    return {img : imgprops, faces : faces}
  }

  const cleanUp = () =>{
    setImgURL("")
    setImgData({})
    setIsLoading(false)
    setImageShown(false)
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <ReactParticles/>
      {route === "SignIn" 
        ?
        <SignIn setRoute={setRoute} />
        :
      <>
        <Navigation route={route} setRoute={setRoute}/>
        <Logo/>
        <ApiInput setApiKey={setApiKey} setApiSecret={setApiSecret}/>
        {/*<Rank/> component not yet done, require backend*/}
        <ImageLinkForm onSubmit={onSubmit} isLoading={isLoading} setIsLoading={setIsLoading} imgShown={imageShown} cleanUp={cleanUp}/>
        <FaceRecognition imgURL={imgURL} imgData={imgData} />
        </>
      }
    </div>
  )
}

export default App
