import { useContext, useState } from "react"
import { SERVER } from "../misc/Globals"
import { toast } from "react-toastify"
import { ModalContext } from "../Contexts/ModalContext"
import { Modal } from "../misc/Modal"

const UpdateForm = (props) => {
    const [name, setName] = useState("")
    const [pw, setPw] = useState("")
    const {modalClosed, setModalClosed} = useContext(ModalContext)
    console.log(modalClosed)
    if (!modalClosed)
    return (
        <Modal>
        <form className="space-y-6 w-full" action="#" method="POST" onSubmit={(event)=> {
            event.preventDefault()
            UpdateAccount(props.setRoute, name, pw, setModalClosed )}}>
                <div>
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
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Update
                </button>
                </div>
            </form>
        </Modal>
    )
}

const UpdateAccount = async (setRoute, Email, Pw, setModalClosed) =>{
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
              setModalClosed(true)

              await setTimeout(()=>{
                setRoute("SignIn")
              },3000)
            }
}
export default UpdateForm