import { useEffect, useState } from "react"

export default function LoginFetch(loginData) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {

    console.log("hit!")
    if (!loginData) {
      return;
    }
    const postData = async () => {
      try {
        setLoading(true);
        setErrors(null);
        console.log("pre send check", loginData)
        const response = await fetch(`http://${import.meta.env.VITE_API}/user/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData)
        })
        if (!response.ok) {
          const errorResponse = await response.json();
          setErrors(errorResponse.errors?.map(error => error.msg) || ['An unknown error occured']);
          throw new Error(`HTTP Error on LoginFetch: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        if (!error) {
          setErrors([error.msg]);
        }
      } finally {
        setLoading(false);
      }
    };
    postData()
  }, [loginData])
  return { data, loading, errors }
}

