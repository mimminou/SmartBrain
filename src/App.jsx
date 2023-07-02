import './App.css'
import Navigation from "./components/Navigation/Navigation"
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ReactParticles from "./components/Particles/ReactParticles"

function App() {

  return (
    <>
      <ReactParticles/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm />

      {/*
        <FaceRecognition />
      */}
    </>
  )
}

export default App
