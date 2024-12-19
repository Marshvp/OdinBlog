import { useState } from "react";
import LoginFetch from "../../api/loginFetch";

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginData, setLoginData] = useState(null)

  const { data, loading, errors } = LoginFetch(loginData)

  function submitLogin(event) {
    event.preventDefault();
    console.log("Hit");
    setLoginData({ email, password })
  }

  return (
    <div>
      <div>Hello From Login</div>
      <div className="formContainer">
        <form className="formActual" method="POST" onSubmit={submitLogin}>
          <div className="formControl">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="signUpInput" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className="formControl">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="signUpInput" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <button className="bg-blogBlue hover:bg-sky-700 rounded mt-3 p-2 text-white text-sm" type="submit">Submit</button>
        </form>
      </div>
      {loading && (<div>Loading...</div>)}
      {errors && (
        <div>
          {errors.map((error, index) => {
            <div key={index}>Error: {error}</div>
          })}
        </div>
      )}
      {data && (<div>Sent</div>)}
    </div>
  )
}
