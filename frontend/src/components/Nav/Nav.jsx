/* eslint-disable react/react-in-jsx-scope */
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="left-side" />
      <div className="mid">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
      <div className="right-side">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/login">Register</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
