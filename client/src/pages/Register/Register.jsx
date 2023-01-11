import './Register.scss';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Register = () => (
  <div className="container">
    <div className="form">
      <h2>Sign Up</h2>
      <hr />
      <form className="sign-up">
        <div className="top-level">
          <div className="form-item">
            <label htmlFor="first_name" name="first_name">First Name</label>
            <input
              htmlFor="first_name"
              type="text"
              id="first_name"
              placeholder="Joe"
            />
          </div>

          <div className="form-item">
            <label htmlFor="last_name" name="last_name">Last Name</label>
            <input
              htmlFor="last_name"
              type="text"
              id="last_name"
              placeholder="Rogan"
            />
          </div>

        </div>
        <div className="mid-level">
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="lana@onlyfans.com"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="ILikeHotDogs123"
              required
            />
          </div>

          <div className="lower-level">
            <div className="input-left">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="checkbox"
              />
              <span>Remember me</span>
            </div>
            <a href="/" className="forgot-password">Forgot Password</a>
          </div>

        </div>
        <div className="form-item">
          <button className="btn" type="submit">
            Login
          </button>
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

export default Register;
