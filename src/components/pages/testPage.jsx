import { useContext } from "react";
import useCheckAdmin from "../../hooks/auth/VerifyAdmin";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function TestComponent() {
  const { isAdmin, loading, error } = useCheckAdmin();
  const { username } = useContext(AuthContext)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div>
      <h1>Test page</h1>
      <p>Hello, {username}</p>
      <Link to={'/createBlog'}>
        <button className="bg-blogBlack rounded-md p-2 text-slate-300 hover:text-blogTeal">Add a new Blog</button>
      </Link>
    </div>
  )
}
