import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import useAuth from "../HOOK/useAuth";
import axios from "axios";

export default function Login() {
  const [isLogin, token] = useAuth();
  
  useEffect(() => {
    axios
      .get("/users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        if (response.data) {
          return <Navigate to="/" />;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <div className="login">
      <p className="login-para">
        {isLogin ? "vous etes connnecté" : "Vous n'est pas connecté"}
      </p>
    </div>
  );
}
