import { useContext, useState } from "react"
import { SERVER, btnStyleBlue, btnStyleRed} from "../misc/Globals"
import { toast } from "react-toastify"
import { Modal } from "../misc/Modal"
import { ModalContext } from "../Contexts/ModalContext"


const SignOutForm = (props) => {
    const {isVisible, setIsVisible} = useContext(ModalContext)
    return (
        <Modal dialog = {props.dialog}>
            <span>Log Out ?</span>
            <div className="flex justify-center items-center">
                <button className={btnStyleBlue} onClick={()=> {
                    SignOut(props.setRoute)
                    setIsVisible(false)}}
                    >Yes</button>

                <button className={btnStyleRed} onClick={()=> setIsVisible(false)}>No</button>
            </div> 
        </Modal>
    )
}

const SignOut = async (setRoute) =>{
  const validationRequest = await fetch(SERVER + "/SignOut",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                credentials: "include"
                })
            const responseData = await validationRequest.json()
            console.log(responseData.message)
            if (responseData.message === "LoggedOut"){
              console.log("Logged out")
              toast.info("Signed out")
              setRoute("SignIn")
            }
}

export default SignOutForm