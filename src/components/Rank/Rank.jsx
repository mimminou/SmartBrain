
import React, { useState } from "react";

const Rank  = () => {    
const [rank, setRank] = useState(0);

    return (
    <nav className="flex flex-col justify-center items-center m-4 text-gray-50">
      <p className="font-bold">{"Your rank is : "}</p>
      <p className="text-5xl">{"#" + rank}</p>      
    </nav>
  )
}

export default Rank;