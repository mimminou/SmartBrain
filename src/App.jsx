import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ReactParticles from "./components/Particles/ReactParticles"
import FaceDetectionAPI from './components/ImageHandler/ImageHandler'
import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (imgURL) => {
    await FaceDetectionAPI(imgURL)
    setIsLoading(false)
  }

  return (
    <>
      <ReactParticles/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onSubmit={onSubmit} isLoading={isLoading} setIsLoading={setIsLoading}/>

      {/*
        <FaceRecognition />
      */}
    </>
  )
}

export default App
