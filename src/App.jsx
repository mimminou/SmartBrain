import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ReactParticles from "./components/Particles/ReactParticles"
import { FaceDetectionAPI, LocalFaceDetectionAPI } from './components/ImageHandler/ImageHandler'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import { useContext, useState } from 'react'
import ApiInput from './components/ApiAccess/ApiAccess'
import {SignIn, ValidateUser} from './components/Signin/SignIn'
import Register from './components/Register/Register'
import { Container } from './components/misc/Container'
import DevButton from './components/misc/DevComponents'
import { toast } from 'react-toastify';
import {Points, getPoints} from './components/Points/Points'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [imageShown, setImageShown] = useState(false)
  const [imgURL, setImgURL] = useState("")
  const [imgData, setImgData] = useState({})
  //const [apiKey, setApiKey] = useState("")
  //const [apiSecret, setApiSecret] = useState("")
  const [route, setRoute] = useState("Validate")
  const [points, setPoints] = useState(0)

  const onSubmit = async (imgURL) => {
    const result = await LocalFaceDetectionAPI(imgURL)
    setIsLoading(false)
    setImgURL(imgURL)
    setImageShown(true)
    if (result.response.status == "success"){
      console.log("success")
      //get response and only harvest the data we need
      setImgData(LocalParseResults(result))
    }
    else {
      console.log("failed, no face was detected")
      toast.warning("Failed, could not detect faces")
      console.log(result)
      setImgData({})
      //inform user that no face was detected in here
    }
  }

  const LocalParseResults = (resultJSON) => {
    const imgprops = {w : resultJSON.response.imgSize.w, h : resultJSON.response.imgSize.h}
    const faces = resultJSON.response.faces
    faces.forEach((face, index) =>{
      faces[index] = {center : {x :face.centerX, y : face.centerY}, w : face.width, h : face.height}
    })
    return {img : imgprops, faces : faces}
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

 // switch case just for fun, normally would be done with an if else, but switch looks somehow more readable here 
  switch (route) {
    case "Dev":
      return (
        <Container styling={"h-[100vh]"}>
          <DevButton/>
        </Container>
          )

    case "Validate":
      ValidateUser(setRoute, setPoints)
      break

    case "SignIn":
      return (
        <Container styling={"h-[100vh]"}>
          <SignIn setRoute={setRoute}/>
        </Container>
          )
      
    case "Register":
      return (
        <Container styling={"h-[100vh]"}>
          <Register setRoute={setRoute}/>
        </Container>
      )

    case "Home":
      return (
        <div>
          <Container props>
            <Navigation setRoute={setRoute}/>
            <Logo/>
            <Points points={points} setPoints={setPoints}/>
            <ImageLinkForm onSubmit={onSubmit} isLoading={isLoading} setIsLoading={setIsLoading} imgShown={imageShown} cleanUp={cleanUp}/>
            <FaceRecognition imgURL={imgURL} imgData={imgData} points={points} setPoints={setPoints} />
          </Container>
        </div>
      )
  }
}

export default App