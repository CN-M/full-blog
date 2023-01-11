import axios from 'axios';
import { useEffect, useState } from 'react';
import topic_3 from '../../assets/images/topic-3.png';

const SliderItem = ({
  category: {
    name, img,
  },
}) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getCategoryData = async () => {
      // const response = await axios.get('http://localhost:5000/categories');
      const response = await axios.get(`http://localhost:5000/posts/${name}/posts`);
      setCategoryData(response.data);
    };

    getCategoryData();
  }, []);

  const alt = name.replace(' ', '-').toLowerCase();
  return (
    <li className="slider-item">
      <a href={`/categories/${name}`} className="slider-card">

        {/* <figure className="slider-banner img-holder"
     style={{ width: 507, height: 618 }}> */}
        <figure className="slider-banner img-holder">
          <img
            src={topic_3}
            width="507"
            height="618"
            loading="lazy"
            alt={alt}
            className="img-cover"
          />
        </figure>

        <div className="slider-content">
          <span className="slider-title">{name}</span>

          <p className="slider-subtitle">
            {categoryData.length}
            {' '}
            Articles
          </p>
        </div>

      </a>
    </li>
  );
};

export default SliderItem;
