import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Cars = () => {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cars")
      .then((response) => {
        console.log(response.data);
        setCarData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-red-500 min-h-screen">
        {carData.map((car, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-10"
          >
            <h1 className="text-2xl  font-bold">{car}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cars;
