import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const SinglePost = () => {
  const { slug } = useParams();

  const [categoryData, setCategoryData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setimage] = useState('');
  const [createdAt, setCreatedAt] = useState('');
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
      const response = await axios.get(`http://localhost:5000/posts/${slug}`);
      setPostData(response.data);
      setTitle(response.data.title);
      setimage(response.data.image);
      setContent(response.data.content);
      const postDate = new Date(response.data.createdAt);
      const dateCreated = postDate.toUTCString().split(', ')[1].split(' ').slice(0, 3).join(' ');
      setCreatedAt(dateCreated);
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
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  # A Heading
  ## A Heading
  #### A Heading
  ##### A Heading

  * Lists
  * [ ] todo
  * [x] done

  A table:

  | a | b |
  | - | - |
  `;

  return (
    <>
      <Header />
      <div className="single__container">
        <div className="single__banner">
          <img className="single__blog-image" src={imgPath + image} alt={title} />
        </div>
        <section>
          <h1>{title}</h1>
          <hr />
          <h3 className="date">{createdAt}</h3>
          <br />
          <div className="content">
            <ReactMarkdown remarkPlugins={{ remarkGfm }}>
              {/* {content} */}
              {/* # Welcome to the thunder dome! */}
              {markdown}
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePost;
