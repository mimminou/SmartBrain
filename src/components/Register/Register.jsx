
import BrainSVG from "../../assets/brain.svg"
const Register = ({setRoute}) => {

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
            <form className="space-y-6" action="#" method="POST">
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
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={()=> setRoute("SignIn")}
                >
                    Register
                </button>
                </div>
            </form>

            </div>
        </div>
    </div>
    )
}

export default Register