/* eslint-disable react/button-has-type */
import tag_6 from '../../assets/images/tag6.png';

const TagButton = ({
  category: {
    name,
  },
}) => {
  const alt = name.replace(' ', '-').toLowerCase();
  return (
    <li>
      {/* <button className="card tag-btn"> */}
      <a href={`/categories/${name}`} className="card tag-btn">
        <img src={tag_6} width="32" height="32" loading="lazy" alt={alt} />
        <p className="btn-text">{name}</p>
      </a>
      {/* </button> */}
    </li>
  );
};

export default TagButton;
