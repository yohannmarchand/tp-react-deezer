import * as React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import ViewDetail from "./pages/ViewDetail";

function App() {
  return (
    <div>
      <header className="fixed w-full z-50 py-6 bg-zinc-900 text-zinc-200 text-center mx-auto flex items-center justify-center">
        <svg className="mr-4 h-12 w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1d4ed8"><path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.271 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19Z"/></svg>
        <span className="font-bold text-3xl">Deezer Music</span>
      </header>
      <div className="container mx-auto text-center p-5 translate-y-28">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ViewDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App