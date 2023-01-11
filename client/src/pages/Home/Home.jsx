import './Home.scss';

import axios from 'axios';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import LatestPost from '../../components/LatestPost';
import FeaturedPost from '../../components/FeaturedPost';
import Topics from '../../components/Topics';
import PopularTags from '../../components/PopularTags';
import BackToTop from '../../components/BackToTop';
import Footer from '../../components/Footer';

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
          <Topics categoryData={categoryData} />
          <FeaturedPost postData={postData} />
          <PopularTags categoryData={categoryData} />
          <LatestPost postData={postData} />
          <BackToTop />
          <Footer />
        </article>
      </main>
    </div>
  );
};

export default Home;
