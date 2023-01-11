import popular_post_3 from '../../assets/images/popular-post-3.jpg';

const PopularPosts = ({
  post: {
    title, slug, createdAt,
  },
}) => {
  const postDate = new Date(createdAt);
  const datePosted = postDate.toUTCString().split(', ')[1].split(' ').slice(0, 3).join(' ');
  return (
    <li>
      <div className="popular-card">
        <figure className="card-banner img-holder">
          <img
            src={popular_post_3}
            width="64"
            height="64"
            loading="lazy"
            alt={title}
            className="img-cover"
          />
        </figure>
        <div className="card-content">
          <h4 className="headline headline-4 card-title">
            <a href={`/posts/${slug}`} className="link hover-2">{title}</a>
          </h4>
          <div className="warpper">
            <p className="card-subtitle">15 min read</p>
            <time className="publish-date" dateTime="2022-04-15">{datePosted}</time>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PopularPosts;
