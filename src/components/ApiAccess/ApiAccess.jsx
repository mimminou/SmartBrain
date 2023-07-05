const ApiInput = ({setApiKey, setApiSecret}) => {

    return (
        <div className="flex flex-col justify-center items-center font-bold text-white">
            <p className="text-center">In order for this app to work, you need to provide an API key and a secret key, easiely obtainable from skybiometry.com upon creating an account </p>
            <input className="p-2 m-1 w-[25vw] font-bold text-black rounded max-w-[500px]" type="password" placeholder="application key" onChange={(event)=> setApiKey(event.target.value)} />
            <input className="p-2 m-1 w-[25vw] font-bold text-black rounded max-w-[500px]" type="password" placeholder="application secret" onChange={(event)=> setApiSecret(event.target.value)}/>
        </div>
    )
}

export default ApiInput