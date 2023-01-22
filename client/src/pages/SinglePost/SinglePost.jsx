import './SinglePost.scss';
import axios from 'axios';

import { useEffect, useState } from 'react';

const SinglePost = () => {
  const path = window.location.pathname.split('/')[2];

  const [categoryData, setCategoryData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setimage] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    username: '',
  });

  useEffect(() => {
    const getPostData = async () => {
      const response = await axios.get(`http://localhost:5000/posts/${path}`);
      setPostData(response.data);
      setTitle(response.data.title);
      setimage(response.data.image);
      setContent(response.data.content);
      setUsername(response.data.username.first_name);
    };

    getPostData();
  }, []);

  const imgPath = 'http://localhost:5000/images/Posts/Featured/';

  // const postDate = new Date(createdAt);
  // const datePosted = postDate.toUTCString().split(', ')[1].split(' ').slice(0, 3).join(' ');

  // if (postData) {
  //   const {
  //     title, category, slug, image, content,
  //     username: {
  //       username, first_name, last_name,
  //     },
  //   } = postData;

  //   console.log(title);
  // }

  return (
    <>
      <nav className="navbar">
        <img src="img/logo.png" className="logo" alt="" />
        <ul className="links-container">
          <li className="link-item"><a href="/" className="link">home</a></li>
          <li className="link-item"><a href="/editor" className="link">editor</a></li>
        </ul>
      </nav>

      <div className="banner" />

      <div className="blog">
        <h1 className="title">{title}</h1>
        <p className="published"><span>published at - </span></p>
        <div className="article" />
      </div>

      <h1 className="sub-heading">Read more</h1>

      {/* <!-- blog section --> */}
      <section className="blogs-section">{content}</section>
      {/* <!-- <div class="blog-card">
            <img src="img/header.png" class="blog-image" alt="" />
            <h1 class="blog-title">Lorem ipsum dolor sit amet consectetur.</h1>
            <p class="blog-overview">Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Sunt incidunt fugiat quos porro repellat harum. Adipisci tempora corporis rem cum.</p>
            <a href="/" class="btn dark">read</a>
        </div> --> */}
    </>
  );
};

export default SinglePost;
