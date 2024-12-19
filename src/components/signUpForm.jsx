import { useState } from "react";
import AddUserFetch from "../api/addUserFetch";


export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)

  const [userData, setUserData] = useState(null)
  console.log("Pre-UserData", userData)

  const { data, loading, errors } = AddUserFetch(userData)


  function handleSubmit(event) {
    event.preventDefault()

    const userData = { username, password, confirmPassword, email, isAdmin };
    console.log(userData);

    setUserData(userData)
  }


  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="formActual" method="POST">
          <div className="formControl">
            <label htmlFor="userName" className="formLabel" /> User Name
            <input name="userName" id="userName" type="text" className="signUpInput" value={username} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div className="formControl">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="signUpInput" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="formControl">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="signUpInput" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className="formControl">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className="signUpInput" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
          </div>
          <div className="formControl">
            <label htmlFor="isAdmin">Check for admin</label>
            <input type="checkbox" name="isAdmin" id="isAdmin" checked={isAdmin} onChange={(e) => { setIsAdmin(e.target.checked) }} />
          </div>
          <button className="bg-sky-500 hover:bg-sky-700 rounded mt-3 p-2 text-white text-sm" type="submit">Submit</button>

        </form>
        {loading && <div>Loading...</div>}
        {errors && (
          <div>
            {errors.map((error, index) => (
              <div key={index}>Error: {error}</div>
            ))}
          </div>
        )}
      </div>
    </>
  )
} 
