/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

import recent_post_1 from '../assets/images/recent-post-1.jpg';
import recent_post_2 from '../assets/images/recent-post-2.jpg';
import recent_post_3 from '../assets/images/recent-post-3.jpg';
import recent_post_4 from '../assets/images/recent-post-4.jpg';
import recent_post_5 from '../assets/images/recent-post-5.jpg';
import popular_post_1 from '../assets/images/popular-post-1.jpg';
import popular_post_2 from '../assets/images/popular-post-2.jpg';
import popular_post_3 from '../assets/images/popular-post-3.jpg';
import popular_post_4 from '../assets/images/popular-post-4.jpg';
import images_author_6 from '../assets/images/author-6.png';
import images_author_7 from '../assets/images/author-7.png';
import images_author_8 from '../assets/images/author-8.png';
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

const LatestPost = ({ postData }) => (
  <section className="section recent-post" id="recent" aria-labelledby="recent-label">
    <div className="container">

      <div className="post-main">

        <h2 className="headline headline-2 section-title">
          <span className="span">Recent posts</span>
        </h2>

        <p className="section-text">
          Don&apos;t miss the latest trends
        </p>

        <ul className="grid-list">

          <li>
            <div className="recent-post-card">

              {/* <figure className="card-banner img-holder"
               style={{ width: 271, height: 258 }}> */}
              <figure className="card-banner img-holder">
                <img
                  src={recent_post_1}
                  width="271"
                  height="258"
                  loading="lazy"
                  alt="Helpful Tips for Working from Home as a Freelancer"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <a href="/" className="card-badge">Working Tips</a>

                <h3 className="headline headline-3 card-title">
                  <a href="/" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                </h3>

                <p className="card-text">
                  Gosh jaguar ostrich quail one excited dear
                  hello and bound and the and bland moral misheard
                  roadrunner flapped lynx far that and jeepers giggled far and far
                </p>

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

              </div>

            </div>
          </li>

          <li>
            <div className="recent-post-card">

              {/* <figure className="card-banner img-holder"
               style={{ width: 271, height: 258 }}> */}
              <figure className="card-banner img-holder">
                <img
                  src={recent_post_2}
                  width="271"
                  height="258"
                  loading="lazy"
                  alt="Helpful Tips for Working from Home as a Freelancer"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <a href="/" className="card-badge">Working Tips</a>

                <h3 className="headline headline-3 card-title">
                  <a href="/" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                </h3>

                <p className="card-text">
                  Gosh jaguar ostrich quail one excited dear hello and
                  bound and the and bland moral misheard
                  roadrunner flapped lynx far that and jeepers giggled far and far
                </p>

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

              </div>

            </div>
          </li>

          <li>
            <div className="recent-post-card">

              {/* <figure className="card-banner img-holder"
               style={{ width: 271, height: 258 }}> */}
              <figure className="card-banner img-holder">
                <img
                  src={recent_post_3}
                  width="271"
                  height="258"
                  loading="lazy"
                  alt="Helpful Tips for Working from Home as a Freelancer"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <a href="/" className="card-badge">Working Tips</a>

                <h3 className="headline headline-3 card-title">
                  <a href="/" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                </h3>

                <p className="card-text">
                  Gosh jaguar ostrich quail one excited dear hello and bound and
                  the and bland moral misheard
                  roadrunner flapped lynx far that and jeepers giggled far and far
                </p>

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

              </div>

            </div>
          </li>

          <li>
            <div className="recent-post-card">

              {/* <figure className="card-banner img-holder"
               style={{ width: 271, height: 258 }}> */}
              <figure className="card-banner img-holder">
                <img
                  src={recent_post_4}
                  width="271"
                  height="258"
                  loading="lazy"
                  alt="Helpful Tips for Working from Home as a Freelancer"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <a href="/" className="card-badge">Working Tips</a>

                <h3 className="headline headline-3 card-title">
                  <a href="/" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                </h3>

                <p className="card-text">
                  Gosh jaguar ostrich quail one excited dear hello and bound and
                  the and bland moral misheard
                  roadrunner flapped lynx far that and jeepers giggled far and far
                </p>

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

              </div>

            </div>
          </li>

          <li>
            <div className="recent-post-card">

              {/* <figure className="card-banner img-holder"
               style={{ width: 271, height: 258 }}> */}
              <figure className="card-banner img-holder">
                <img
                  src={recent_post_5}
                  width="271"
                  height="258"
                  loading="lazy"
                  alt="Helpful Tips for Working from Home as a Freelancer"
                  className="img-cover"
                />
              </figure>

              <div className="card-content">

                <a href="/" className="card-badge">Working Tips</a>

                <h3 className="headline headline-3 card-title">
                  <a href="/" className="link hover-2">Helpful Tips for Working from Home as a Freelancer</a>
                </h3>

                <p className="card-text">
                  Gosh jaguar ostrich quail one excited dear hello
                  and bound and the and
                  bland moral misheard
                  roadrunner flapped lynx far
                  that and jeepers giggled far and far
                </p>

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

              </div>

            </div>
          </li>

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

      <div className="post-aside grid-list">

        <div className="card aside-card">

          <h3 className="headline headline-2 aside-title">
            <span className="span">Popular Posts</span>
          </h3>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                {/* <figure className="card-banner img-holder"
                 style={{ width: 64, height: 64 }}> */}
                <figure className="card-banner img-holder">
                  <img
                    src={popular_post_1}
                    width="64"
                    height="64"
                    loading="lazy"
                    alt="Creating is a privilege but it’s also a gift"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">

                  <h4 className="headline headline-4 card-title">
                    <a href="/" className="link hover-2">Creating is a privilege but it’s also a gift</a>
                  </h4>

                  <div className="warpper">
                    <p className="card-subtitle">15 mins read</p>

                    <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                {/* <figure className="card-banner img-holder"
                 style={{ width: 64, height: 64 }}> */}
                <figure className="card-banner img-holder">
                  <img
                    src={popular_post_2}
                    width="64"
                    height="64"
                    loading="lazy"
                    alt="Being unique is better than being perfect"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">

                  <h4 className="headline headline-4 card-title">
                    <a href="/" className="link hover-2">Being unique is better than being perfect</a>
                  </h4>

                  <div className="warpper">
                    <p className="card-subtitle">15 mins read</p>

                    <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                {/* <figure className="card-banner img-holder"
                 style={{ width: 64, height: 64 }}> */}
                <figure className="card-banner img-holder">
                  <img
                    src={popular_post_3}
                    width="64"
                    height="64"
                    loading="lazy"
                    alt="Every day, in every city and town across the country"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">

                  <h4 className="headline headline-4 card-title">
                    <a href="/" className="link hover-2">Every day, in every city and town across the country</a>
                  </h4>

                  <div className="warpper">
                    <p className="card-subtitle">15 mins read</p>

                    <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                {/* <figure className="card-banner img-holder"
                 style={{ width: 64, height: 64 }}> */}
                <figure className="card-banner img-holder">
                  <img
                    src={popular_post_4}
                    width="64"
                    height="64"
                    loading="lazy"
                    alt="Your voice, your mind, your story, your vision"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">

                  <h4 className="headline headline-4 card-title">
                    <a href="/" className="link hover-2">Your voice, your mind, your story, your vision</a>
                  </h4>

                  <div className="warpper">
                    <p className="card-subtitle">15 mins read</p>

                    <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                {/* <figure className="card-banner img-holder"
                 style={{ width: 64, height: 64 }}> */}
                <figure className="card-banner img-holder">
                  <img
                    src={popular_post_2}
                    width="64"
                    height="64"
                    loading="lazy"
                    alt="Being unique is better than being perfect"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">

                  <h4 className="headline headline-4 card-title">
                    <a href="/" className="link hover-2">Being unique is better than being perfect</a>
                  </h4>

                  <div className="warpper">
                    <p className="card-subtitle">15 mins read</p>

                    <time className="publish-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>

        <div className="card aside-card">

          <h3 className="headline headline-2 aside-title">
            <span className="span">Last Comment</span>
          </h3>

          <ul className="comment-list">

            <li>
              <div className="comment-card">

                <blockquote className="card-text">
                  “ Gosh jaguar ostrich quail one excited
                  dear hello and bound and the and bland moral misheard
                  roadrunner “
                </blockquote>

                <div className="profile-card">
                  <figure className="profile-banner img-holder">
                    <img src={images_author_6} width="32" height="32" loading="lazy" alt="Jane Cooper" />
                  </figure>

                  <div>
                    <p className="card-title">Jane Cooper</p>

                    <time className="card-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="comment-card">

                <blockquote className="card-text">
                  “ Gosh jaguar ostrich quail one excited dear
                  hello and bound and the and bland moral misheard
                  roadrunner “
                </blockquote>

                <div className="profile-card">
                  <figure className="profile-banner img-holder">
                    <img src={images_author_7} width="32" height="32" loading="lazy" alt="Katen Doe" />
                  </figure>

                  <div>
                    <p className="card-title">Katen Doe</p>

                    <time className="card-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="comment-card">

                <blockquote className="card-text">
                  “ Gosh jaguar ostrich quail one excited dear hello and bound
                  and the and bland moral misheard
                  roadrunner “
                </blockquote>

                <div className="profile-card">
                  <figure className="profile-banner img-holder">
                    <img
                      src={images_author_8}
                      width="32"
                      height="32"
                      loading="lazy"
                      alt="Barbara Cartland"
                    />
                  </figure>

                  <div>
                    <p className="card-title">Barbara Cartland</p>

                    <time className="card-date" dateTime="2022-04-15">15 April 2022</time>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>

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

      </div>

    </div>
  </section>
);

export default LatestPost;
