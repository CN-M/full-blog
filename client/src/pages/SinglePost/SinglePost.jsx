/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Context } from '../../context/Context';
import './SinglePost.scss';

export default function SinglePost() {
  const path = window.location.pathname.split('/')[2];
  const imgPath = 'http://localhost:5000/images/Posts/Featured/';

  console.log(path);

  const [updateMode, setUpdateMode] = useState(false);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const response = await axios.get(`http://localhost:5000/posts/${path}`);
      setPostData(response.data);
      console.log(response.data);
    };

    getPostData();
  });

  const {
    title, category, slug, image,
    username,
    createdAt, content, _id,
  } = postData;

  const postDate = new Date(createdAt);
  const datePosted = postDate.toUTCString().split(', ')[1].split(' ').slice(0, 3).join(' ');

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`, {
  //       data: { username: user.username },
  //     });
  //     window.location.replace('/');
  //   } catch (err) {}
  // };

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`/posts/${post._id}`, {
  //       username: user.username,
  //       title,
  //       desc,
  //     });
  //     setUpdateMode(false);
  //   } catch (err) {}
  // };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
        }

        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
        />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i
              className="singlePostIcon far fa-edit"
              onClick={() => setUpdateMode(true)}
            />
            <i
              className="singlePostIcon far fa-trash-alt"
            />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${username}`} className="link">
              <b> {first_name + last_name}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {datePosted}
          </span>
        </div>
        <textarea
          className="singlePostDescInput"
          value={content}
          // onChange={(e) => setDesc(e.target.value)}
        />
        <p className="singlePostDesc">{content}</p>
        <button className="singlePostButton">
          {/* <button className="singlePostButton" onClick={handleUpdate}> */}
          Update
        </button>
      </div>
    </div>
  );
}
