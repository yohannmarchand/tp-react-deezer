import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="container mx-auto text-center p-5">
      <h1 className="font-bold mb-12">Deezer App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App