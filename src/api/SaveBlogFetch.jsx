import { useEffect, useState } from "react";


function SaveBlogFetch(html) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!html) return;

    const postData = async () => {
      try {

        setLoading(true);
        setErrors(null);

        const response = await fetch(`http://${import.meta.env.VITE_API}/admin/createBlog`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: html
        })
        if (!response.ok) {
          const errorResponse = await response.json();
          setErrors(errorResponse.errors?.map(error => error.msg) || ['An unknown Error in SaveBlogFetch']);
          throw new Error(`HTTP Error on SaveBlogFetch: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        if (!error)
          setErrors([error.msg])
      } finally {
        setLoading(false)
      }
    }
    postData()
  }, [html])
  return { data, loading, errors }
}

export default SaveBlogFetch
