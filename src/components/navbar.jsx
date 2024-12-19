import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <div className="navBarContainer grid mt-4 mb-4 pt-2 pb-2 bg-blogGrey">
        <ul className="flex justify-end gap-2 px-2">
          <h1 className="border border-blogBlack rounded-sm p-2">Marshall&apos;s Blog</h1>
          <li className="border border-blogBlack rounded-sm p-2">
            <span>Home</span>
          </li>
          <li className="border border-blogBlack rounded-sm p-2">
            <span>Blogs</span>
          </li>
          <div className="navBarLogin flex gap-2 px-4">
            <li className="border border-blogBlack rounded-sm p-2">
              <span>Login</span>
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


