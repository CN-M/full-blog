import popular_post_1 from '../assets/images/popular-post-1.jpg';
import popular_post_2 from '../assets/images/popular-post-2.jpg';
import popular_post_3 from '../assets/images/popular-post-3.jpg';
import popular_post_4 from '../assets/images/popular-post-4.jpg';
import PopularPosts from './SubComponents/PopularPosts';

const postAside = ({ postData }) => (
  <div className="card aside-card">
    <h3 className="headline headline-2 aside-title">
      <span className="span">Popular Posts</span>
    </h3>
    <ul className="popular-list">
      {
          postData.slice(0, 6)?.map((object, i) => (
            <PopularPosts post={object} key={object._id} />
          ))
        }
    </ul>
  </div>
);

export default postAside;
