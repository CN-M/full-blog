import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import topic_3 from '../../assets/images/topic-3.png';

const SliderItem = ({
  category: {
    name, image,
  },
}) => {
  const [categoryData, setCategoryData] = useState([]);

  const imgPath = 'http://localhost:5000/images/Categories/';

  useEffect(() => {
    const getCategoryData = async () => {
      const response = await axios.get(`http://localhost:5000/categories/${name}`);
      setCategoryData(response.data);
    };

    getCategoryData();
  }, []);

  const alt = name.replace(' ', '-').toLowerCase();
  return (
    <li className="slider-item">
      <Link to={`/categories/${name}`} className="slider-card">
        <figure className="slider-banner img-holder">
          <img
            src={imgPath + image}
            width="507"
            height="618"
            loading="lazy"
            alt={alt}
            className="img-cover"
          />
        </figure>
        <div className="slider-content">
          <span className="slider-title">{name}</span>
          {
            categoryData.length === 1
              ? <p className="slider-subtitle">{categoryData.length} Article</p>
              : <p className="slider-subtitle">{categoryData.length} Articles</p>
          }
        </div>
      </Link>
    </li>
  );
};

export default SliderItem;
