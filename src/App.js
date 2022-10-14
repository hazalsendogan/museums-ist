import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Museums from "./components/Museums";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route exact path="/" element={ <LandingPage />}/>
        <Route path="/museums/:id" element={<Museums/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
