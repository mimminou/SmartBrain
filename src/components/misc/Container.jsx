import { ToastContainer, Flip } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import "./toastStyling.css"
import ReactParticles from "../Particles/ReactParticles"

export const Container = (props) => {
    let customStyles = ""
    if (props.styling)
        customStyles = props.styling
   
    return (
        <div className={`flex flex-col justify-center items-center ${customStyles}`}>
            <ToastContainer position="bottom-center" autoClose="4000" hideProgressBar="true" draggable="false" theme="colored" transition={Flip}/>
            <ReactParticles/>
            {props.children}
        </div>
    )
}