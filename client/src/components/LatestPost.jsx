/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

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
      Don&apos;t miss the latest trends
    </p>
    <ul className="grid-list">
      {
        postData.slice(0, 11)?.map((object, i) => (
          <ContentCard post={object} key={object._id} />
        ))
      }
    </ul>
    <nav aria-label="pagination" className="pagination">
      <a href="/" className="pagination-btn" aria-label="previous page">
        <ion-icon name="arrow-back" aria-hidden="true" />
      </a>
      <a href="/" className="pagination-btn">1</a>
      <a href="/" className="pagination-btn">2</a>
      <a href="/" className="pagination-btn">3</a>
      <a href="/" className="pagination-btn" aria-label="more page">...</a>
      <a href="/" className="pagination-btn" aria-label="next page">
        <ion-icon name="arrow-forward" aria-hidden="true" />
      </a>
    </nav>
  </div>
);

export default LatestPost;
