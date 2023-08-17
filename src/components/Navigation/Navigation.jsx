import { toast } from "react-toastify"
import { SERVER } from "../misc/Globals"
import { useContext, useState } from "react"
import { ModalContext } from "../Contexts/ModalContext"
import UpdateForm from "./UpdateForm"
import DeleteForm from "./DeleteForm"
import SignOutForm from "./SignOutForm"

const Navigation = ({setRoute}) => {
  const [dialog, setDialog] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  return (
    <ModalContext.Provider value={{isVisible, setIsVisible}}>
      <nav className="p-4 text-gray-50 gap-4 flex w-[100vw] flex-row-reverse">
        <button onClick={()=> {
          setIsVisible(true)
          setDialog("signOut")
          SignOut(setRoute)
        }} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">Sign Out</button>       
        <button onClick={()=> {
          setIsVisible(true)
          setDialog("delete")
          DeleteAccount(setRoute)}} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-red-400 focus:text-red-500 active:text-red-600">Delete Account</button>
        <button onClick={()=> {
          setIsVisible(true)
          setDialog("update")}} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">Update Account Details</button>       
      </nav>
      {instantiateDialog(dialog, setRoute)}
    </ModalContext.Provider>
  )
}

const instantiateDialog = (dialog, setRoute) => {
  switch (dialog) {
    case "update" : {
      return <UpdateForm setRoute = {setRoute}/>
    }
    case "delete" : {
      
      return <DeleteForm setRoute = {setRoute}/>
    }
    case "signOut" : {
      return <SignOutForm setRoute = {setRoute}/>
    }
  }
}

export default Navigation;