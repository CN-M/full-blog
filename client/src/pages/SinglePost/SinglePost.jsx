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
    <div className="singlePost">
      <div className="singlePostWrapper">
        {image && (
          <img src={imgPath + image} alt={title} className="singlePostImg" />
        )}
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          // autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <h1 className="singlePostTitle">
          {title}
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <a to={`/?user=${username}`} className="link">
              <b> {username}</b>
            </a>
          </span>
          <span className="singlePostDate">
            {/* {new Date(post.createdAt).toDateString()} */}
            2012
          </span>
        </div>
        <textarea
          className="singlePostDescInput"
          value={content}
          // onChange={(e) => setDesc(e.target.value)}
        />
        <p className="singlePostDesc">{content}</p>
        {/* <button className="singlePostButton" onClick={handleUpdate}> */}
        {/* <button className="singlePostButton">
          Update
        </button> */}
      </div>
    </div>
  );
};

export default SinglePost;
