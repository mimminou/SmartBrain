import { useContext, useEffect, useRef, useState } from "react"
import { SERVER, btnStyleBlue, btnStyleRed } from "../misc/Globals"
import { toast } from "react-toastify"
import { Modal } from "../misc/Modal"
import { ModalContext } from "../Contexts/ModalContext"

const UpdateForm = (props) => {
    const [name, setName] = useState("")
    const [pw, setPw] = useState("")
    const {isVisible, setIsVisible} = useContext(ModalContext)
    
    return (
        <Modal >
        <form className="space-y-6 w-full" action="#" method="POST" onSubmit={(event)=> {
            event.preventDefault()
            UpdateAccount(props.setRoute, name, pw, setIsVisible)}}>
                <div >
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="name"
                        type="email"
                        onChange={(event)=> setName(event.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(event) => setPw(event.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className={btnStyleBlue}>
                    Update
                </button>
                <button className={btnStyleRed} onClick={(e)=> {
                    e.preventDefault()
                    setIsVisible(false)}}>Discard</button>
                </div>
            </form>
        </Modal>
    )
}

const UpdateAccount = async (setRoute, Email, Pw, setIsVisible) =>{
    const validationRequest = await fetch(SERVER + "/UpdateUser",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                body : JSON.stringify({
                  "Email" : Email,
                  "Pw" : Pw
                }),
                credentials: "include"
                }).catch(()=>{
                    console.log("Failed to update user account")
                    toast.error("Failed to Update user details, please try again later")
                })
            console.log("RUNNING UPDATE ACC")
            const responseData = await validationRequest.json()
            console.log(responseData.message)
            if (responseData.message === "Updated"){
                toast.info("Account Updated, You will be logged out shortly")
                setIsVisible(false)

                await setTimeout(()=>{
                    setRoute("SignIn")
                },3000)
                }
}
export default UpdateForm