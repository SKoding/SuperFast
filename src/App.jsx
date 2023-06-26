import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Users from "./components/Users/Users";
import Landing from "./components/Landing";
import useToken from "../Server/useToken";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken = {setToken}/>;
  }
  return (
    <div>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Landing />} />
          <Route path="/users" element={ <Users />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
