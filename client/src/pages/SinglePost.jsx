import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

import cope from './cope.txt';

const SinglePost = () => {
  const { slug } = useParams();

  const [postContent, setPostContent] = useState('');

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

    const getCope = async () => {
      const response = await fetch(cope);
      const data = await response.text();
      setPostContent(data);
    };

    getCope();
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
  ~~A Heading~~
  #### A Heading
  ##### A Heading

  * Lists
  * [ ] todo
  * [x] done
  * 
  

  A table:

  | a | b |
  | - | - |
  | S/N | Pet | Image |
|--|--|--|
| 1 | Cat |![A cat looking at you](https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=68615bab04be2077a471009ffc236509) |
| 2 | Dog |![A dog looking at you](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)|
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
            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
              {/* {content} */}
              {/* # Welcome to the thunder dome! */}
              {/* {markdown} */}
              {postContent}
            </ReactMarkdown>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePost;
