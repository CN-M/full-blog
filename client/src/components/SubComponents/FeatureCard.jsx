/* eslint-disable react/jsx-one-expression-per-line */
import featured_1 from '../../assets/images/featured-1.png';
import author_1 from '../../assets/images/author-1.png';

const FeatureCard = ({
  post: {
    title, category, slug, username: { username, first_name }, createdAt,
  },
}) => {
  const postDate = new Date(createdAt);
  const datePosted = postDate.toUTCString().split(', ')[1].split(' ').slice(0, 3).join(' ');
  return (
    <li>
      <div className="card feature-card">
        <figure className="card-banner img-holder">
          <img
            src={featured_1}
            width="1602"
            height="903"
            loading="lazy"
            alt={title}
            className="img-cover"
          />
        </figure>
        <div className="card-content">
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
              <span className="span">3 min read</span>
            </div>
          </div>
          <h3 className="headline headline-3">
            <a href={`/posts/${slug}`} className="card-title hover-2">{ title }</a>
          </h3>
          <div className="card-wrapper">
            <div className="profile-card">
              <img
                src={author_1}
                width="48"
                height="48"
                loading="lazy"
                alt={first_name || username}
                className="profile-banner"
              />
              <div>
                <p className="card-title">{first_name || username}</p>
                <p className="card-subtitle">{datePosted}</p>
              </div>
            </div>
            <a href={`/posts/${slug}`} className="card-btn">Read more</a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FeatureCard;
