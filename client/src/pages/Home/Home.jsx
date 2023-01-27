import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import LatestPost from '../../components/LatestPost';
import PostsBar from '../../components/PostsBar';
import InstagramBar from '../../components/InstagramBar';
import FeaturedPost from '../../components/FeaturedPost';
import Topics from '../../components/Topics';
import PopularTags from '../../components/PopularTags';
import BackToTop from '../../components/BackToTop';
import Footer from '../../components/Footer';
import LatestComment from '../../components/LatestComments';

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const response = await axios.get('http://localhost:5000/posts');
      setPostData(response.data);
    };

    const getCategoryData = async () => {
      const response = await axios.get('http://localhost:5000/categories');
      setCategoryData(response.data);
    };

    getPostData();
    getCategoryData();
  }, []);

  return (
    <div>
      <main>
        <article>
          <Header />
          <Hero />
          {/* <Topics categoryData={categoryData} /> */}
          {/* <FeaturedPost postData={postData} /> */}
          {/* <PopularTags categoryData={categoryData} /> */}
          <section className="section recent-post" id="recent" aria-labelledby="recent-label">
            <div className="container">
              <LatestPost postData={postData} />
              <div className="post-aside grid-list">
                <PostsBar postData={postData} />
                {/* <LatestComment /> */}
                {/* <InstagramBar /> */}
              </div>
            </div>
          </section>
          <BackToTop />
          <Footer categoryData={categoryData} />
        </article>
      </main>
    </div>
  );
};

export default Home;
