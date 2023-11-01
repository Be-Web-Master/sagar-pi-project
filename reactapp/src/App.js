import React from "react";
import SignUp from "./Component/SignUp/SignUp";
import SignIn from "./Component/SignIn/SignIn";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import MyResponse from "./Component/MyResponse/MyResponse";
import FormTab from "./Component/FormTab/FormTab";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myResponse" element={<MyResponse/>}/>
          <Route path="/formtab" element={<FormTab/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;


{/* <Link to="/myResponse">My Response</Link>
<Link to="/Form">My Response</Link> */}