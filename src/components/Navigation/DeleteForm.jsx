import { useContext, useState } from "react"
import { SERVER, btnStyleBlue, btnStyleRed} from "../misc/Globals"
import { toast } from "react-toastify"
import { Modal } from "../misc/Modal"
import { ModalContext } from "../Contexts/ModalContext"

const DeleteForm = (props) => {
    const {isVisible, setIsVisible} = useContext(ModalContext)
    return (
        <Modal dialog = {props.dialog}>
            <span>Are you sure you want to delete your account ?</span>
            <div className="flex justify-center items-center">
                <button className={btnStyleBlue} onClick={()=> {
                    DeleteAccount(props.setRoute)
                    setIsVisible(false)}}
                    >Yes</button>
                <button className={btnStyleRed} onClick={()=> setIsVisible(false)}>No</button>
            </div> 
        </Modal>
    )
}

const DeleteAccount = async (setRoute) =>{
  const DeletionRequest = await fetch(SERVER + "/DeleteUser",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                credentials: "include",
                body: JSON.stringify({
                  "Request" : "DELETE"
                })
                }).catch(()=>{
                  console.log("error")
                  toast.error("An Error has occured")
                  return
                })
            const responseData = await DeletionRequest.json()
            console.log(responseData.message)
            if (responseData.message === "DELETED"){
              toast.info("Account Deleted, you will be logged out shortly")
              await setTimeout(()=>{
                    setRoute("SignIn")
              },3000)
            }
          }




export default DeleteForm