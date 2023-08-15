import { toast } from "react-toastify"
import { SERVER } from "../misc/Globals"
import { useContext, useState } from "react"
import { ModalContext } from "../Contexts/ModalContext"
import UpdateForm from "./UpdateForm"
const Navigation = ({setRoute}) => {
  const [modalClosed, setModalClosed] = useState(true)

  return (
    <ModalContext.Provider value = {{setRoute, modalClosed, setModalClosed}}>
      <nav className="p-4 text-gray-50 gap-4 flex w-[100vw] flex-row-reverse">
        <button onClick={()=> SignOut(setRoute)} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">Sign Out</button>       
        <button onClick={()=> DeleteAccount(setRoute)} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-red-400 focus:text-red-500 active:text-red-600">Delete Account</button>
        <button onClick={()=> setModalClosed(false)} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">Update Account Details</button>       
      </nav>
      <UpdateForm setRoute = {setRoute}/>
    </ModalContext.Provider>
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

const DeleteAccount = async (setRoute) =>{
  const validationRequest = await fetch(SERVER + "/DeleteUser",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                body : {
                  message : "DELETE"
                },
                credentials: "include"
                })
            const responseData = await validationRequest.json()
            console.log(responseData.message)
            if (responseData.message === "LoggedOut"){
              toast.info("Account Deleted")
              setRoute("SignIn")
            }
}


export default Navigation;