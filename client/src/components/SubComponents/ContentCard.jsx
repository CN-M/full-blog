/* eslint-disable react/jsx-no-undef */

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
      <div className="recent-post-card">
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
          <a href={`/posts/${username}/all`} className="card-badge">{first_name || username}</a>
          <h3 className="headline headline-3 card-title">
            <a href={`/posts/${slug}`} className="link hover-2">{title}</a>
          </h3>
          <p className="card-text">
            {content.slice(0, 155)}...
          </p>
          <div className="card-wrapper">
            <div className="card-tag">
              {
                category.map((singleCategory, i) => (
                  <a href={`/category/${singleCategory.name}`} key={singleCategory._id} className="span hover-2">#{singleCategory.name}</a>
                ))
              }
            </div>
            <div className="wrapper">
              <ion-icon name="time-outline" aria-hidden="true" />
              <span className="span">3 mins read</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ContentCard;
