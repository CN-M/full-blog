/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

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
        <span className="span">Editor&apos;s picked</span>
      </h2>

      <p className="section-text">
        Featured and highly rated articles
      </p>

      <ul className="feature-list">

        <li>
          <div className="card feature-card">

            {/* <figure className="card-banner img-holder" style={{ width: 1602, height: 903 }}> */}
            <figure className="card-banner img-holder">
              <img
                src={featured_1}
                width="1602"
                height="903"
                loading="lazy"
                alt="Self-observation is the first step of inner unfolding"
                className="img-cover"
              />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="/" className="span hover-2">#Travel</a>

                  <a href="/" className="span hover-2">#Lifestyle</a>
                </div>

                <div className="wrapper">
                  <ion-icon name="time-outline" aria-hidden="true" />

                  <span className="span">3 mins read</span>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="/" className="card-title hover-2">
                  Self-observation
                  {/* Self-observation is the first step of inner unfolding */}
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img
                    src={author_1}
                    width="48"
                    height="48"
                    loading="lazy"
                    alt="Joseph"
                    className="profile-banner"
                  />

                  <div>
                    <p className="card-title">Joseph</p>

                    <p className="card-subtitle">25 Nov 2022</p>
                  </div>
                </div>

                <a href="/" className="card-btn">Read more</a>

              </div>

            </div>

          </div>
        </li>

        {
            postData.map((object, i) => (
              <FeatureCard post={object} key={i} />
            ))
          }

        <li>
          <div className="card feature-card">

            {/* <figure className="card-banner img-holder" style={{ width: 1602, height: 903 }}> */}
            <figure className="card-banner img-holder">
              <img
                src={featured_2}
                width="1602"
                height="903"
                loading="lazy"
                alt="Self-observation is the first step of inner unfolding"
                className="img-cover"
              />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="/" className="span hover-2">#Design</a>

                  <a href="/" className="span hover-2">#Movie</a>
                </div>

                <div className="wrapper">
                  <ion-icon name="time-outline" aria-hidden="true" />

                  <span className="span">6 mins read</span>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="/" className="card-title hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img
                    src={author_1}
                    width="48"
                    height="48"
                    loading="lazy"
                    alt="Joseph"
                    className="profile-banner"
                  />

                  <div>
                    <p className="card-title">Joseph</p>

                    <p className="card-subtitle">25 Nov 2022</p>
                  </div>
                </div>

                <a href="/" className="card-btn">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            {/* <figure className="card-banner img-holder" style={{ width: 1602, height: 903 }}> */}
            <figure className="card-banner img-holder">
              <img
                src={featured_3}
                width="1602"
                height="903"
                loading="lazy"
                alt="Self-observation is the first step of inner unfolding"
                className="img-cover"
              />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="/" className="span hover-2">#Design</a>

                  <a href="/" className="span hover-2">#Movie</a>
                </div>

                <div className="wrapper">
                  <ion-icon name="time-outline" aria-hidden="true" />

                  <span className="span">6 mins read</span>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="/" className="card-title hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img
                    src={author_1}
                    width="48"
                    height="48"
                    loading="lazy"
                    alt="Joseph"
                    className="profile-banner"
                  />

                  <div>
                    <p className="card-title">Joseph</p>

                    <p className="card-subtitle">25 Nov 2022</p>
                  </div>
                </div>

                <a href="/" className="card-btn">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            {/* <figure className="card-banner img-holder" style={{ width: 1602, height: 903 }}> */}
            <figure className="card-banner img-holder">
              <img
                src={featured_4}
                width="1602"
                height="903"
                loading="lazy"
                alt="Self-observation is the first step of inner unfolding"
                className="img-cover"
              />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="/" className="span hover-2">#Design</a>

                  <a href="/" className="span hover-2">#Movie</a>
                </div>

                <div className="wrapper">
                  <ion-icon name="time-outline" aria-hidden="true" />

                  <span className="span">6 mins read</span>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="/" className="card-title hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img
                    src={author_1}
                    width="48"
                    height="48"
                    loading="lazy"
                    alt="Joseph"
                    className="profile-banner"
                  />

                  <div>
                    <p className="card-title">Joseph</p>

                    <p className="card-subtitle">25 Nov 2022</p>
                  </div>
                </div>

                <a href="/" className="card-btn">Read more</a>

              </div>

            </div>

          </div>
        </li>

        <li>
          <div className="card feature-card">

            {/* <figure className="card-banner img-holder" style={{ width: 1602, height: 903 }}> */}
            <figure className="card-banner img-holder">
              <img
                src={featured_5}
                width="1602"
                height="903"
                loading="lazy"
                alt="Self-observation is the first step of inner unfolding"
                className="img-cover"
              />
            </figure>

            <div className="card-content">

              <div className="card-wrapper">
                <div className="card-tag">
                  <a href="/" className="span hover-2">#Design</a>

                  <a href="/" className="span hover-2">#Movie</a>
                </div>

                <div className="wrapper">
                  <ion-icon name="time-outline" aria-hidden="true" />

                  <span className="span">6 mins read</span>
                </div>
              </div>

              <h3 className="headline headline-3">
                <a href="/" className="card-title hover-2">
                  Self-observation is the first step of inner unfolding
                </a>
              </h3>

              <div className="card-wrapper">

                <div className="profile-card">
                  <img
                    src={author_1}
                    width="48"
                    height="48"
                    loading="lazy"
                    alt="Joseph"
                    className="profile-banner"
                  />

                  <div>
                    <p className="card-title">Joseph</p>

                    <p className="card-subtitle">25 Nov 2022</p>
                  </div>
                </div>

                <a href="/" className="card-btn">Read more</a>

              </div>

            </div>

          </div>
        </li>

      </ul>

      <a href="/" className="btn btn-secondary">
        <span className="span">Show More Posts</span>

        <ion-icon name="arrow-forward" aria-hidden="true" />
      </a>

    </div>

    <img src={shadow_3} width="500" height="1500" loading="lazy" alt="" className="feature-bg" />

  </section>
);
export default FeaturedPost;
