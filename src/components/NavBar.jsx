import { Link } from "react-router-dom"

export default function NavBar() {

  const token = localStorage.getItem("token")
  if (token) {
    const username = localStorage.getItem("username")
    console.log("Token found");
  }

  return (
    <div>
      <div className="navBarContainer grid mt-4 mb-4 pt-2 pb-2 bg-blogGrey">
        <ul className="flex justify-end gap-2 px-2">
          <Link to='/'>
            <h1 className="border border-blogBlack rounded-sm p-2">Marshall&apos;s Blog</h1>
          </Link>
          <li className="border border-blogBlack rounded-sm p-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="border border-blogBlack rounded-sm p-2">
            <span>Blogs</span>
          </li>
          <div className="navBarLogin flex gap-2 px-4">
            <li className="border border-blogBlack rounded-sm p-2">
              <Link to="/login">Login</Link>
            </li>
            <li className="border border-blogBlack rounded-sm p-2">
              <Link to="/signup">Sign Up</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
};


