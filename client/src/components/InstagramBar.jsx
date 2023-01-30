import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import insta_post_1 from '../assets/images/insta-post-1.png';
import insta_post_2 from '../assets/images/insta-post-2.png';
import insta_post_3 from '../assets/images/insta-post-3.png';
import insta_post_4 from '../assets/images/insta-post-4.png';
import insta_post_5 from '../assets/images/insta-post-5.png';
import insta_post_6 from '../assets/images/insta-post-6.png';
import insta_post_7 from '../assets/images/insta-post-7.png';
import insta_post_8 from '../assets/images/insta-post-8.png';
import insta_post_9 from '../assets/images/insta-post-9.png';

const instagramBar = () => (
  <div className="card aside-card insta-card">

    <a href="/" className="logo">
      <img src={logo} width="119" height="37" loading="lazy" alt="Wren logo" />

    </a>

    <p className="card-text">
      Follow us on instagram
    </p>

    <ul className="insta-list">

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_1}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_2}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_3}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_4}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_5}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_6}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_7}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_8}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

      <li>
        {/* <a href="/" className="insta-post img-holder"
           style={{ width: 276, height: 277 }}> */}
        <a href="/" className="insta-post img-holder">
          <img
            src={insta_post_9}
            width="276"
            height="277"
            loading="lazy"
            alt="insta post"
            className="img-cover"
          />
        </a>
      </li>

    </ul>

  </div>
);

export default instagramBar;
