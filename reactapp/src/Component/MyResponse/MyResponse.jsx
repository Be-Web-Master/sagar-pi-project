import React from "react";
import { useSelector } from "react-redux";

const MyResponses = () => {
  const { userData, adminData } = useSelector((state) => state.user);
  console.log({ userData, adminData });
  return (
    <div>
      <h2>My Responses</h2>
      <div className="cards">
        {adminData.map((obj) => {
          return (
            <div className="card">
              <h1>{obj.name}</h1>
              <h1>{obj.email}</h1>
              <h1>{obj.phone}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyResponses;
