import { Link } from 'react-router-dom';

import author_1 from '../../assets/images/author-1.png';

import recent_post_3 from '../../assets/images/recent-post-3.jpg';

const ContentCard = ({
  post: {
    title, category, slug, username: { username, first_name }, createdAt, content, _id, image,
  },
}) => {
  const imgPath = 'http://localhost:5000/images/Posts/Featured/';

  const postDate = new Date(createdAt);
  const datePosted = postDate.toUTCString().split(', ')[1].split(' ').slice(0, 3).join(' ');

  return (
    <li>
      <div href={`/posts/${slug}`} className="recent-post-card">
        {/* <Link to={`/posts/${slug}`} className="recent-post-card"> */}
        <figure className="card-banner img-holder">
          <img
            src={image ? imgPath + image : recent_post_3}
            width="271"
            height="258"
            loading="lazy"
            alt={title}
            className="img-cover"
          />
        </figure>
        <div className="card-content">
          <div className="badge-section">

            {/* <Link to={`/posts/${username}/all`} className="">{first_name || username}</Link> */}
            {/* <Link to={`/category/${first_name}`}
            className="span hover-2">{first_name}</Link> */}
            {
            category.map((singleCategory, i) => (
              // <Link to={`/category/${singleCategory.name}`}
              // key={singleCategory._id} className="card-badge">#{singleCategory.name}</Link>
              <Link to={`/category/${singleCategory.name}`} key={singleCategory._id} className="span hover-2">#{singleCategory.name}</Link>

            ))
            }
          </div>
          <h3 className="headline headline-3 card-title">
            <Link to={`/posts/${slug}`} className="link hover-2">{title}</Link>
          </h3>
          <p className="card-text">
            {content.slice(0, 155)}...
          </p>
          <div className="card-wrapper">
            <div className="profile-card">
              {/* <img
                src={author_1}
                width="48"
                height="48"
                loading="lazy"
                alt={first_name || username}
                className="profile-banner"
              /> */}
              <div className="name-and-date">
                <p className="card-title">{first_name || username} • {datePosted}</p>
                {/* <span></span> */}
                {/* <p className="card-subtitle">{datePosted}</p> */}
              </div>
            </div>
            <div className="card-tag" />
            <div className="wrapper">
              <ion-icon name="time-outline" aria-hidden="true" />
              <span className="span">3 min read</span>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </li>
  );
};

export default ContentCard;
