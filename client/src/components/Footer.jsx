import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Footer = ({ categoryData }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <div className="footer-brand">
              <Link to="/" className="logo">
                {/* <img src={logo} width="119" height="37" loading="lazy" alt="Wren logo" /> */}
                <h1 className="headline headline-3 section-title"><span className="span">C.N.M.</span></h1>
              </Link>
              <p className="footer-text">
                When an unknown prnoto sans took
                a galley and scrambled it to make specimen book not only five When an
                unknown prnoto sans took a galley and scrambled it to five centurie.
              </p>
              <p className="footer-list-title">Address</p>
              <address className="footer-text address">
                123 Main Street
                <br />
                New York, NY 10001
              </address>
            </div>
            <div className="footer-list">
              <p className="footer-list-title">Categories</p>
              <ul>
                {
                  categoryData.map((category, i) => (
                    <li>
                      <Link to={`/category/${category.name}`} key={category._id} className="footer-link hover-2">{category.name}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>
              <p className="footer-text">
                Sign up to be first to receive the latest stories
                inspiring us, case studies, and industry news.
              </p>
              <div className="input-wrapper">
                <input type="text" name="name" placeholder="Your name" required className="input-field" autoComplete="off" />
                <ion-icon name="person-outline" aria-hidden="true" />
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Emaill address"
                  required
                  className="input-field"
                  autoComplete="off"
                />
                <ion-icon name="mail-outline" aria-hidden="true" />
              </div>
              <Link to="/" className="btn btn-primary">
                <span className="span">Subscribe</span>
                <ion-icon name="arrow-forward" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">&copy; { currentYear } C.N.M.</p>
            <ul className="social-list">
              <li>
                <a href="https://twitter.com/CN_Mbhalati" className="social-link" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-twitter" />
                  <span className="span">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/c-n-mbhalati-a6526716a/" className="social-link" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-linkedin" />
                  <span className="span">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/c.n.mbhalati/" className="social-link" target="_blank" rel="noreferrer">
                  <ion-icon name="logo-instagram" />
                  <span className="span">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
