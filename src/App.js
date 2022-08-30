import Home from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import Login from "./pages/login/Login";
import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>

          <Route path="/hello" element={<Home />}>

            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Home />} />
            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
//      <Home />
