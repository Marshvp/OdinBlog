import { useState, useEffect } from "react";

function useFetch(url) {
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP ERROR ON FETCH: ${response.status}`)
                };

                const result = await response.json();
                setData(result);
            } catch(error){
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };
        fetchData()
    }, [url])
    return { data, error, loading }
}

export default useFetch