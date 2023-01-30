import { Link } from 'react-router-dom';

import images_author_6 from '../assets/images/author-6.png';
import images_author_7 from '../assets/images/author-7.png';
import images_author_8 from '../assets/images/author-8.png';

const LatestComment = () => (
  <div className="card aside-card">
    <h3 className="headline headline-2 aside-title">
      <span className="span">Latest Comments</span>
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
);

export default LatestComment;
