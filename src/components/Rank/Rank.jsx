import { useEffect, } from "react";
import { SERVER } from "../misc/Globals"

const Rank  = ({rank, setRank}) => {
    useEffect(()=>{
      const getRank = async () => {
        const response = await fetch(SERVER + "/GetRank",{
                headers: {
                    "Content-Type": "application/json"
                    },
                    credentials : "include"
                })
        const jsonResponse = await response.json()
        jsonResponse.Rank === "0" ? setRank("Unranked") : setRank(jsonResponse.rank)
    } 
      getRank()
    },[])

    return (
    <nav className="flex flex-col justify-center items-center m-4 text-gray-50">
      <p className="font-bold">{"Your rank is : "}</p>
      <p className="text-5xl">{"#" + rank}</p>      
    </nav>
  )
}

export default Rank;