/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

import { Link } from 'react-router-dom';

import recent_post_1 from '../assets/images/recent-post-1.jpg';
import recent_post_2 from '../assets/images/recent-post-2.jpg';
import recent_post_3 from '../assets/images/recent-post-3.jpg';
import recent_post_4 from '../assets/images/recent-post-4.jpg';
import recent_post_5 from '../assets/images/recent-post-5.jpg';
import ContentCard from './SubComponents/ContentCard';

const LatestPost = ({ postData }) => (
  <div className="post-main">
    <h2 className="headline headline-2 section-title">
      <span className="span">Recent posts</span>
    </h2>
    <p className="section-text">
      Read my latest stuff
    </p>
    <ul className="grid-list">
      {
        postData.slice(0, 10)?.map((object, i) => (
          <ContentCard post={object} key={object._id} />
        ))
      }
    </ul>
    <nav aria-label="pagination" className="pagination">
      <Link to="/" className="pagination-btn" aria-label="previous page">
        <ion-icon name="arrow-back" aria-hidden="true" />
      </Link>
      <Link to="/" className="pagination-btn">1</Link>
      <Link to="/" className="pagination-btn">2</Link>
      <Link to="/" className="pagination-btn">3</Link>
      <Link to="/" className="pagination-btn" aria-label="more page">...</Link>
      <Link to="/" className="pagination-btn" aria-label="next page">
        <ion-icon name="arrow-forward" aria-hidden="true" />
      </Link>
    </nav>
  </div>
);

export default LatestPost;
