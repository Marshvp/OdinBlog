import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function NavBar() {
  const { token, username, logOut } = useContext(AuthContext);
  return (
    <div>
      <div key={token ? `user-${username}` : 'guest'} className="navBarContainer grid mt-4 mb-4 pt-2 pb-2 bg-blogGrey">
        <ul className="flex justify-end gap-2 px-2">
          <Link to='/'>
            <h1 className="border border-blogBlack rounded-sm p-2 hover:text-blogTeal">Marshall&apos;s Blog</h1>
          </Link>
          <li className="border border-blogBlack rounded-sm p-2 hover:text-blogTeal">
            <Link to='/'>Home</Link>
          </li>
          <li className="border border-blogBlack rounded-sm p-2 hover:text-blogTeal">
            <span>Blogs</span>
          </li>
          {!token ? (
            <div className="navBarLogin flex gap-2 px-4">
              <li className="border border-blogBlack rounded-sm p-2">
                <Link to="/login">Login</Link>
              </li>
              <li className="border border-blogBlack rounded-sm p-2">
                <Link to="/signup">Sign Up</Link>
              </li>
            </div>
          ) : (
            <div className="navBarLogin flex gap-2 px-4">
              <h2 className="border border-blogBlack rounded-sm p-2">Hello, {username}</h2>
              <li className="border border-blogBlack rounded-sm p-2 hover:bg-blogTeal cursor-pointer">
                <span onClick={logOut}>Log Out</span>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
};


