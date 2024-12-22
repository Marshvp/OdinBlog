import { useEffect, useState } from "react";
import useAuth from "./VerifyToken";
import { useNavigate } from "react-router-dom";


export default function useCheckAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useAuth();

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token")

      try {
        const response = await fetch(`http://${import.meta.env.VITE_API}/admin/validate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        if (response.ok) {
          setIsAdmin(true);
        } else {
          console.error("Admin access denied");
          navigate("/login");
        }
      } catch (error) {
        console.log("Error checking admin access: ", error)
        navigate("/login")
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, [navigate]);

  return { isAdmin, loading }


}
