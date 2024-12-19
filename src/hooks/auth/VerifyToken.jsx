import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function isTokenExpired(token) {
  if (!token) return true;
  const { exp } = jwtDecode(token)
  return Date.now() >= exp * 1000
}

export default function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");


    if (!token) {
      navigate("/login")
    }
    if (isTokenExpired(token)) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }

  }, [navigate]);
}
