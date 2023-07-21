import Home from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import ListView from "./pages/listview/ListView";

import New from "./pages/new/New";


import React, { useState } from 'react';
// import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [token, setToken] = useState();

  /* if (!token) {
     return <Login setToken={setToken} />
   }*/

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Single />} />
            <Route path="home" element={<Home />} />

            <Route path="user">

              <Route index element={<Login />} />
              <Route path=":userId" element={<Login />} />
              <Route path="new" element={<NoPage />} />

            </Route>

            <Route path="*" element={<NoPage />} />

          </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
//      <Home />
