/* eslint-disable camelcase */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */

import tag_1 from '../assets/images/tag1.png';
import tag_2 from '../assets/images/tag2.png';
import tag_3 from '../assets/images/tag3.png';
import tag_4 from '../assets/images/tag4.png';
import tag_5 from '../assets/images/tag5.png';
import tag_6 from '../assets/images/tag6.png';
import tag_7 from '../assets/images/tag7.png';
import tag_8 from '../assets/images/tag8.png';
import tag_9 from '../assets/images/tag9.png';
import tag_10 from '../assets/images/tag10.png';
import tag_11 from '../assets/images/tag11.png';
import tag_12 from '../assets/images/tag12.png';
import TagButton from './SubComponents/TagButton';

const PopularTags = ({ categoryData }) => (
  <section className="tags" aria-labelledby="tag-label">
    <div className="container">

      <h2 className="headline headline-2 section-title" id="tag-label">
        <span className="span">Popular Tags</span>
      </h2>

      <p className="section-text">
        Most searched keywords
      </p>

      <ul className="grid-list">

        <li>
          <button className="card tag-btn">
            <img src={tag_1} width="32" height="32" loading="lazy" alt="Travel" />

            <p className="btn-text">Travel</p>
          </button>
        </li>

        <li>
          <button className="card tag-btn">
            <img src={tag_2} width="32" height="32" loading="lazy" alt="Culture" />

            <p className="btn-text">Culture</p>
          </button>
        </li>

        {
            categoryData.map((object, i) => (
              <TagButton category={object} key={object._id} />
            ))
          }

        <li>
          <button className="card tag-btn">
            <img src={tag_3} width="32" height="32" loading="lazy" alt="Lifestyle" />

            <p className="btn-text">Lifestyle</p>
          </button>
        </li>

        <li>
          <button className="card tag-btn">
            <img src={tag_4} width="32" height="32" loading="lazy" alt="Fashion" />

            <p className="btn-text">Fashion</p>
          </button>
        </li>

        <li>
          <button className="card tag-btn">
            <img src={tag_5} width="32" height="32" loading="lazy" alt="Food" />

            <p className="btn-text">Food</p>
          </button>
        </li>

        <li>
          <button className="card tag-btn">
            <img src={tag_11} width="32" height="32" loading="lazy" alt="Nature" />

            <p className="btn-text">Nature</p>
          </button>
        </li>

        <li>
          <button className="card tag-btn">
            <img src={tag_12} width="32" height="32" loading="lazy" alt="Business" />

            <p className="btn-text">Business</p>
          </button>
        </li>

      </ul>

    </div>
  </section>
);

export default PopularTags;
