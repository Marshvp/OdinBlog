import useAuth from "../../hooks/auth/VerifyToken";



export default function TestComponent() {
  useAuth();


  function testFunc() {
    const testFetch = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(`http://${import.meta.env.VITE_API}/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        if (!response.ok) {
          const result = await response.json()
          console.log(result.access)
          console.log(result.message)
          return
        } else {
          console.log("all good")
          return
        }
      } catch (error) {
        console.lgo("Error caught:", error)
        return
      }
    }
    testFetch()
  }



  return (
    <div>
      <h1>Test page</h1>
      <div>TestPadding</div>
      <button onClick={testFunc}>Test</button>
    </div>
  )
}
