import { SERVER } from "../misc/Globals"

const Navigation = ({setRoute}) => {
  return (
    <nav className="m-4 text-gray-50 flex w-[100vw] flex-row-reverse p-2" >
      <button onClick={()=> SignOut(setRoute)} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">Sign Out</button>       
    </nav>
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
              setRoute("SignIn")
            }
}
export default Navigation;