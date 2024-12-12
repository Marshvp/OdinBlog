

export default function SignUpForm() {
  return (
    <>
      <div className="formContainer">
        <form className="formActual">
          <div className="formControl">
            <label htmlFor="userName" className="formLabel" /> User Name
            <input name="userName" id="userName" type="text" className="signUpInput"/>
          </div>
          <div className="formControl">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="signUpInput"/>
          </div>
          <div className="formControl">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="signUpInput"/>
          </div>
          <div className="formControl">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className="signUpInput"/>
          </div>
          <button className="bg-sky-500 hover:bg-sky-700 rounded mt-3 p-2 text-white text-sm" type="submit">Submit</button>

        </form>
      </div>
    </>
  )
} 
