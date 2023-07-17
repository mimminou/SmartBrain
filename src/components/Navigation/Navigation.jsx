const Navigation = ({route, setRoute}) => {
  return (
    <nav className="m-4 text-gray-50 flex w-[100vw] flex-row-reverse p-2" >
      <button onClick={()=> {if(route != "SignIn") {
        setRoute("SignIn")
      }}} className="font-bold transition duration-150 ease-in-out cursor-pointer text-neutral-50 hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">Sign Out</button>       
    </nav>
  )
}

export default Navigation;