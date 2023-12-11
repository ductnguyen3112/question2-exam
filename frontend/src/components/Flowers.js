
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";    

const Flowers = () => {
    const [flowersData, setflowersData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3001/api/flowers")
        .then((response) => {
          console.log(response.data);
          setflowersData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

 
  return (
    <>
    <Navbar />
    <div className="bg-cyan-500 min-h-screen" >
    {flowersData.map((flower, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-10"
          >
            <h1 className="text-2xl  font-bold">{flower}</h1>
          </div>
        ))}

    </div>
    </>
  );
};

export default Flowers;
