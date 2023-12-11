import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./components/Cars";
import Trees from "./components/Trees";
import Flowers from "./components/Flowers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
      <Routes>
        <Route path="/trees" element={<Trees />}></Route>
      </Routes>
      <Routes>
        <Route path="/flowers" element={<Flowers />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
