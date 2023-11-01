import React, { useState } from "react";
import "./FormTab.css";
import { useSelector, useDispatch } from "react-redux";
import { addAdminData, addUserData } from "../../redux/userSlice";
import { createCardApi } from "../../api/api";

const FormTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addAdminData({ ...formData }));
    dispatch(addUserData({ ...formData }));
    createCardApi({...formData})
    setFormData({
      name: "",
      email: "",
      phone: "",
      profilePicture: "",
    });
  };

  return (
    <div>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={(e) => {
              setFormData({
                ...formData,
                profilePicture: "img are not available",
              });
            }}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormTab;
