import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import author_1 from '../assets/images/author-1.png';

const Header = () => {
  const user = false;
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    //  HEADER ANIMATION
    //  When scrolled donw to 100px header will be active

    const header = document.querySelector('[data-header]');
    const backTopBtn = document.querySelector('[data-back-top-btn]');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('active');
        backTopBtn.classList.add('active');
      } else {
        header.classList.remove('active');
        backTopBtn.classList.remove('active');
      }
    });
  });

  const navClasses = `navbar ${navActive ? 'active' : ''}`;

  const body = document.getElementsByTagName('body')[0];

  const toggleNavbar = () => {
    setNavActive((current) => !current);
    body.classList.toggle('nav-active');
  };

  const currentYear = new Date().getFullYear();
  return (
    <header className="header" data-header>
      <div className="container">

        <Link to="/" className="logo">
          {/* <img src={logo} width="119" height="37" alt="Wren logo" /> */}
          {/* <span className="span">C.N.</span> */}
          <h1 className="headline headline-3 section-title"><span className="span">C.N.M.</span></h1>
        </Link>

        {/* <nav className="navbar" data-navbar> */}
        <nav className={navClasses} data-navbar>
          <div className="navbar-top">
            <Link to="/" className="logo">
              {/* <img src={logo} width="119" height="37" alt="Wren logo" /> */}
              <h1 className="headline headline-3 section-title"><span className="span">C.N.M.</span></h1>
            </Link>

            <button type="button" onClick={toggleNavbar} className="nav-close-btn" aria-label="close menu" data-nav-toggler>
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
            <Link to="/" className="navbar-link hover-1" data-nav-toggler>Contact</Link>
          </li> */}
          </ul>

          {
              user && (
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
                    <Link to="/" className="navbar-bottom-link hover-1">Profile</Link>
                  </li>
                  <li>
                    <Link to="/" className="navbar-bottom-link hover-1">Articles Saved</Link>
                  </li>
                  <li>
                    <Link to="/" className="navbar-bottom-link hover-1">Add New Post</Link>
                  </li>
                  <li>
                    <Link to="/" className="navbar-bottom-link hover-1">My Likes</Link>
                  </li>
                  <li>
                    <Link to="/" className="navbar-bottom-link hover-1">Account Setting</Link>
                  </li>
                  <li>
                    <Link to="/" className="navbar-bottom-link hover-1">Sign Out</Link>
                  </li>
                </ul>
              </div>
              )
        }
          {/* <p className="copyright-text">&copy; { currentYear } C.N.M.</p> */}
        </nav>
        {/* <Link to="/" className="btn btn-primary">Subscribe</Link> */}
        <div className="div" />
        <button type="button" onClick={toggleNavbar} className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
