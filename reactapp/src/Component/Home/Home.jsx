import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import FormTab from "../FormTab/FormTab";
import MyResponse from "../MyResponse/MyResponse";
const Home = () => {
  const [switchComp, setSwitchComp] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {/* <Link to="/myResponse">My Response</Link>
    <Link to="/form">Form</Link> */}
      <div className="btn-Container">
        <button
          style={{ width: "100px" }}
          onClick={() => {
            setSwitchComp(false);
          }}
        >
          MyResponse
        </button>
        <button
          style={{ width: "100px" }}
          onClick={() => {
            setSwitchComp(true);
          }}
        >
          Form
        </button>
        {switchComp ? <FormTab /> : <MyResponse />}
      </div>
    </>
  );
};



export default Home;
