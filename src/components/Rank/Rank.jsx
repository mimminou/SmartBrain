import { useEffect, useState } from "react";
import { SERVER } from "../misc/Globals"

const Rank  = () => {    
const [rank, setRank] = useState(0);
   
    useEffect(()=>{
      getRank()
    },[])
    const getRank = async () => {
      const response = await fetch(SERVER + "/GetRank",{
                headers: {
                    "Content-Type": "application/json"
                    },
                    credentials : "include"
                })
      const jsonResponse = await response.json()
      setRank(jsonResponse.rank)
    }
    return (
    <nav className="flex flex-col justify-center items-center m-4 text-gray-50">
      <p className="font-bold">{"Your rank is : "}</p>
      <p className="text-5xl">{"#" + rank}</p>      
    </nav>
  )
}

export default Rank;