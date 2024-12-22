import { useEffect, useState } from "react";
import useAuth from "./VerifyToken";
import { useNavigate } from "react-router-dom";


export default function useCheckAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  useAuth();

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        setError("No token found");
        navigate("/login")
        return;
      }

      try {
        const response = await fetch(`http://${import.meta.env.VITE_API}/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        const result = await response.json();
        if (!response.ok) {
          console.log("Admin access denied", result.message)
          setError(result.message || "Access denied");
          navigate("/login");
        } else {
          setIsAdmin(true);
        }
      } catch (err) {
        console.log("Error checking admin access: ", err)
        setError("Error checking admin access");
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, [navigate]);

  return { isAdmin, loading, error }
}
