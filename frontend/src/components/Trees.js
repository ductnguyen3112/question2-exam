import React from 'react'
import Navbar from './Navbar'
import { useState , useEffect } from 'react';
import axios from 'axios';

const Trees = () => {

    const [treesData, settreesData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:3001/api/trees")
        .then((response) => {
          console.log(response.data);
          settreesData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return (
    <>
    <Navbar />
    <div className="bg-green-500 min-h-screen" >
    {treesData.map((trees, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-10"
          >
            <h1 className="text-2xl  font-bold">{trees}</h1>
          </div>
        ))}

    </div>
    </>
  )
}

export default Trees