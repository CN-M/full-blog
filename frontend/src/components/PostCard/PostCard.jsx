import './PostCard.scss';

const PostCard = () => (
  <div className="post-card">
    <div className="img">
      <h1>A random image</h1>
    </div>
    <div className="blog-card">
      <h2>Title</h2>
      <h3>Date</h3>
      <p>
        Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus.
        Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam,
        in volutpat augue lectus sed magna.
        Integer mollis lorem quis ipsum maximus finibus.
      </p>
      <a href="/">Read More...</a>
    </div>
  </div>
);

export default PostCard;
