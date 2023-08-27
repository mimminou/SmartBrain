import { useEffect, } from "react";
import { SERVER } from "../misc/Globals"

const Points  = ({points, setPoints}) => {

    return (
    <nav className="flex flex-col justify-center items-center m-4 text-gray-50">
      <p className="font-bold">{"You have : "}</p>
      <p className="text-5xl">{points===1 ? points + " Point" : points + " Points"}</p>      
    </nav>
  )
}

const getPoints = async (setPoints) => {
  const response = await fetch(SERVER + "/GetPoints",{
          headers: {
              "Content-Type": "application/json"
              },
              credentials : "include"
          })
  const jsonResponse = await response.json()
  setPoints(jsonResponse.points)
} 
export {Points, getPoints}