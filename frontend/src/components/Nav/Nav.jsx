/* eslint-disable react/react-in-jsx-scope */
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="left-side">
        <h1>Some Logo</h1>
      </div>
      <div className="mid">
        {/* <ul> */}
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/write">Write</a></li>
        {/* </ul> */}
      </div>
      <div className="right-side">
        {/* <ul> */}
        <li><a href="/login">Login</a></li>
        <li><a href="/sign-up">Register</a></li>
        {/* </ul> */}
      </div>
    </nav>
  );
}

export default Nav;
