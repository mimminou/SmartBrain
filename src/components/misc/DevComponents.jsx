import {SERVER } from "./Globals"
const DevButton = () => {
    const signInUserDev = async () => {
        const response = (await fetch(SERVER + "/SignIn",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
        credentials: "include",
        body: JSON.stringify({
            "Email" : "TESTMAIL@TESTMAIL.TEST",
            "Pw" : "TEST"
        })
        }))
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        }
    const validateUserDev = async() => {
        await fetch(SERVER + "/Validate",{
            headers: {

                "Content-Type": "application/json",
                },
            credentials: "include"
            })
    }
    return (
        <>
            <button className="m-2 text-white rounded-sm border-2 border-gray-400" onClick={()=> signInUserDev()}>Sign In</button>
            <button className="m-2 text-white rounded-sm border-2 border-gray-400" onClick={()=> validateUserDev()}>Validate</button> 
        </>
    )

}

export default DevButton