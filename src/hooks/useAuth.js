import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/axios.js";






const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if(token){
      setIsLoggedIn(true)
    }
  },[navigate])

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await API.post("/api/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        setIsLoggedIn(true);
        navigate("/users",{replace:true});
      } else {
        setError("Login failed: No token received.");
      }
    } catch (error) {
      setError(err.response?.data?.error || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/",{replace:true});
  };

  return { isLoggedIn, loading, error, login, logout };
};

export default useAuth;
