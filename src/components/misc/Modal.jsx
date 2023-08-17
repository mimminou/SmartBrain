import 'react-toastify/dist/ReactToastify.css'
import "./toastStyling.css"
import { useContext, useState, useEffect} from "react"
import './modal.css'
import { ModalContext } from "../Contexts/ModalContext"

export const Modal = (props) => {
    let customStyles = ""
    if (props.styling){
        customStyles = props.styling
    }
    const {isVisible, setIsVisible} = useContext(ModalContext)
    return (
        <div className={`flex absolute top-0 left-0 z-20 justify-center items-center p-0 m-0 w-screen max-w-none h-screen backdrop-brightness-50 min-w-screen ${isVisible ? "modalDialogShown" : "modalDialogHidden"}`}>
            <dialog className={`text-white relative flex flex-col items-center justify-center backdrop-blur-lg mt-2 px-10 py-6 shadow-2xl bg-blue-950 rounded-xl bg-opacity-60 max-w-[50%] modalDialog gap-2 ${customStyles} ${isVisible ? "modalDialogShown" : "modalDialogHidden"}`}>
                {props.children}
            </dialog>
        </div>
    )
}
