/* eslint-disable jsx-a11y/label-has-associated-control */
// import './Login.scss';

const Login = () => (
  <div className="body">

    <div className="login-form">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form action="">
        <div className="form-component">
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-component">
          <input type="password" name="password" id="password" placeholder="Password" required />

          <input type="checkbox" id="viewPswd" onClick="showPassword()" />
          <label htmlFor="viewPswd" className="viewPswd">
            <i className="fa-solid fa-eye" id="eye" />
          </label>

        </div>
        <div className="form-component">
          <input type="checkbox" name="checkbox" id="checkbox" className="inp-checkbox" />
          <label htmlFor="checkbox" className="checkbox">
            <span>
              <i className="fa-solid fa-check" />
            </span>
            <span>Remember Me</span>
          </label>
          <a href="/" className="pass-rec">Forgot Password</a>
        </div>
        <div className="form-component">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
    <div className="animation">
      <ul className="box">
        <li className="fa-solid fa-spinner" />
        <li className="fa-solid fa-circle-notch" />
        <li className="fa-solid fa-spinner" />
        <li className="fa-solid fa-circle-notch" />
        <li className="fa-solid fa-spinner" />
        <li className="fa-solid fa-spinner" />
      </ul>
    </div>
  </div>
);

export default Login;
