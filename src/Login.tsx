import React from "react";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./assets/background.jpg";
import "./App.scss";

type Props = {};

export default function Login({}: Props) {
  // Routes State
  const navigate = useNavigate();

  // Local State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });

  const [validate, setValidate] = useState({
    email: false,
    confirmPassword: false,
    phone: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email" && e.target.value.length > 0) {
      setValidate({
        ...validate,
        email: !e.target.value.includes("@"),
      });
    } else if (
      e.target.name === "confirmPassword" &&
      e.target.value.length > 0
    ) {
      setValidate({
        ...validate,
        confirmPassword: e.target.value !== formData.password,
      });
    } else if (e.target.name === "phone" && e.target.value.length > 0) {
      setValidate({
        ...validate,
        phone:
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            e.target.value
          ),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="App">
      <div className="app-hero">
        <img src={Hero} />
      </div>
      <div className="app-forms">
        <h1 className="app-forms-title">Create an account</h1>
        <form className="app-forms-form" onSubmit={handleSubmit}>
          <div>
            <label>Your Email Address</label>
            <input name="email" type="email" onChange={handleChange} />
            {validate.email ? <p>Please input correct email</p> : ""}
          </div>
          <div>
            <label>Your Password</label>
            <input name="password" type="password" onChange={handleChange} />
          </div>
          <div>
            <label>Confirm Your Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
            />
            {validate.confirmPassword ? <p>Passwords do not match</p> : ""}
          </div>
          <div>
            <label>Your Full Name</label>
            <input name="name" type="text" onChange={handleChange} />
          </div>
          <div>
            <label>Your Phone Number</label>
            <input name="phone" type="phone" onChange={handleChange} />
            {validate.phone ? <p>Please input correct phone number</p> : ""}
          </div>
          <div className="app-forms-checkbox">
            <input type="checkbox" />
            <label>I agree to the terms and conditions</label>
          </div>
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
}
