import { toast } from "react-toastify"
import BrainSVG from "../../assets/brain.svg"
import { SERVER, btnStyleBlue} from "../misc/Globals"
const Register = ({setRoute}) => {


    const RegisterUser = async (event) => {
      event.preventDefault()
      const {name, email, password} = event.target.elements
      const response = await fetch(SERVER + "/Register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
            "Email" : email.value,
            "Name" : name.value,
            "Pw" : password.value
        })
      }).catch(()=>{
        console.log("error occured")
        toast.error("An Error has occured")
      })
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      if(jsonResponse.message === "SUCCESS")
        setRoute("SignIn")
      else if (jsonResponse.err === "DUPACC"){
        toast.error("Email Already registered please try another one")
      }
      else {
        toast.error("Server error")
      }
    }
    return (
    <div className="flex justify-center items-center w-[50vw] h-[80vh]">
        <div className="flex flex-col flex-1 items-center justify-center backdrop-blur-sm mt-2 px-6 py-12 shadow-2xl bg-blue-950 rounded-xl bg-opacity-40 min-w-[350px] max-w-[50%] g:px-8">
            <div className="sm:w-full sm:max-w-sm">
            <img
                className="mx-auto w-auto h-auto"
                src={BrainSVG}
                alt=""
            />
            <h2 className="mt-10 text-2xl font-bold tracking-tight leading-9 text-center text-white">
                Register 
            </h2>
            </div>

            <div className="mt-10 sm:w-full">
            <form className="space-y-6" action="#" method="POST" onSubmit={RegisterUser}>
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
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
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className={btnStyleBlue}
                >
                    Register
                </button>
                <button
                    className={btnStyleBlue}
                    onClick={()=> setRoute("SignIn")}>
                    Already have an account ? Login
                </button>
                </div>
            </form>

            </div>
        </div>
    </div>
    )
}

export default Register