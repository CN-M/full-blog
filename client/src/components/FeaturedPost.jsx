/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

import { Link } from 'react-router-dom';

import featured_1 from '../assets/images/featured-1.png';
import author_1 from '../assets/images/author-1.png';
import featured_2 from '../assets/images/featured-2.png';
// import author_1 from "../assets/images/author-1.png"
import featured_3 from '../assets/images/featured-3.png';
// import author_1 from "../assets/images/author-1.png"
import featured_4 from '../assets/images/featured-4.png';
// import author_1 from "../assets/images/author-1.png"
import featured_5 from '../assets/images/featured-5.png';
// import author_1 from "../assets/images/author-1.png"
import shadow_3 from '../assets/images/shadow-3.svg';

import FeatureCard from './SubComponents/FeatureCard';

const FeaturedPost = ({ postData }) => (
  <section className="section feature" aria-label="feature" id="featured">
    <div className="container">

      <h2 className="headline headline-2 section-title">
        <span className="span">Editor&apos;s Picks</span>
      </h2>

      <p className="section-text">
        Featured and highly rated articles
      </p>

      <ul className="feature-list">
        {
            postData.slice(0, 5)?.map((object, i) => (
              <FeatureCard post={object} key={object._id} />
            ))
          }
      </ul>

      <Link to="/posts/all" className="btn btn-secondary">
        <span className="span">Show More Posts</span>
        <ion-icon name="arrow-forward" aria-hidden="true" />
      </Link>
    </div>
    <img src={shadow_3} width="500" height="1500" loading="lazy" alt="" className="feature-bg" />
  </section>
);
export default FeaturedPost;
