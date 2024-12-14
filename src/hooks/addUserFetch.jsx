import { useEffect, useState } from "react";


function AddUserFetch(userData) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        if (!userData) return;

        const postData = async () => {
            try {
                setLoading(true);
                setErrors(null);
                console.log("pre send check", userData);

                const response = await fetch(`http://${import.meta.env.VITE_API}/user/addUser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData)
                })
                if (!response.ok) {
                    // If the response is not ok, handle validation errors
                    const errorResponse = await response.json();
                    setErrors(errorResponse.errors?.map(error => error.msg) || ['An unknown error occurred']);
                    throw new Error(`HTTP Error on AddUserFetch: ${response.status}`);
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                if (!error)
                    setErrors([error.msg]);
            } finally {
                setLoading(false)
            }
        };
        postData()

    }, [userData])
    return { data, loading, errors }
}

export default AddUserFetch
