
import { ToastContainer, Flip } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import "./toastStyling.css"
import { useContext, useState,} from "react"
import './modal.css'
import { ModalContext } from "../Contexts/ModalContext"

export const Modal = (props) => {
    const {modalClosed, setModalClosed} = useContext(ModalContext)
    let customStyles = ""
    if (props.styling){
        customStyles = props.styling
    }

    return (
        <>
        <div className="absolute top-0 left-0 p-0 m-0 w-screen max-w-none h-screen backdrop-brightness-50 min-w-screen z-19"></div>
        <dialog className={`flex flex-col items-center justify-center backdrop-blur-lg mt-2 px-6 py-12 shadow-2xl bg-blue-950 rounded-xl bg-opacity-60 min-w-[350px] max-w-[50%] modalDialog gap-2 ${customStyles} ${modalClosed ? "hidden" : "visible"}`}>
            {props.children}
            <button className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " onClick={()=> setModalClosed(true)}>Discard</button>
        </dialog>
        </>
    )
}