/* eslint-disable react/button-has-type */

import logo from '../assets/images/logo.svg';
import author_1 from '../assets/images/author-1.png';

const Header = () => {
  const currentYear = new Date().getFullYear();
  return (
    <header className="header" data-header>
      <div className="container">

        <a href="/" className="logo">
          {/* <img src={logo} width="119" height="37" alt="Wren logo" /> */}
          {/* <span className="span">C.N.</span> */}
          <h1 className="headline headline-3 section-title"><span className="span">C.N.M.</span></h1>
        </a>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={logo} width="119" height="37" alt="Wren logo" />
            </a>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true" />
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link hover-1" data-nav-toggler>Home</a>
            </li>
            <li>
              <a href="#topics" className="navbar-link hover-1" data-nav-toggler>Topics</a>
            </li>
            <li>
              <a href="#featured" className="navbar-link hover-1" data-nav-toggler>Featured Post</a>
            </li>
            <li>
              <a href="#recent" className="navbar-link hover-1" data-nav-toggler>Recent Post</a>
            </li>
            {/* <li>
            <a href="/" className="navbar-link hover-1" data-nav-toggler>Contact</a>
          </li> */}
          </ul>

          <div className="navbar-bottom">
            <div className="profile-card">
              <img src={author_1} width="48" height="48" alt="Steven" className="profile-banner" />
              <div>
                <p className="card-title">Hello Steven !</p>
                <p className="card-subtitle">
                  You have 3 new messages
                </p>
              </div>
            </div>

            <ul className="link-list">
              <li>
                <a href="/" className="navbar-bottom-link hover-1">Profile</a>
              </li>
              <li>
                <a href="/" className="navbar-bottom-link hover-1">Articles Saved</a>
              </li>
              <li>
                <a href="/" className="navbar-bottom-link hover-1">Add New Post</a>
              </li>
              <li>
                <a href="/" className="navbar-bottom-link hover-1">My Likes</a>
              </li>
              <li>
                <a href="/" className="navbar-bottom-link hover-1">Account Setting</a>
              </li>
              <li>
                <a href="/" className="navbar-bottom-link hover-1">Sign Out</a>
              </li>
            </ul>
          </div>
          <p className="copyright-text">&copy;{ currentYear } C.N.M.</p>
        </nav>
        <a href="/" className="btn btn-primary">Subscribe</a>
        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
