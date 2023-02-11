import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function Write() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Adventure');
  const [image, setImage] = useState('featured-2.png');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('Jake T austin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/posts', {
      username,
      title,
      content,
      category,
      image,
    });
  };

  return (
    <>
      <Header />
      <div className="banner">
        <input type="file" accept="image/*" id="banner-upload" hidden />
        <label htmlFor="banner-upload" className="banner-upload-btn"><img src="img/upload.png" alt="upload banner" /></label>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="blog">
          <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title} className="title" placeholder="Blog title..." />
          <textarea type="textarea" id="content" onChange={(e) => setContent(e.target.value)} className="article" placeholder="Start writing here..." />

          {/* <textarea type="text" id="title"
          onChange={(e) => setTitle(e
          .target.value)} value={title} className="title" placeholder="Blog title..." /> */}
        </div>

        <div className="blog-options">
          <button type="submit" className="btn dark publish-btn">publish</button>
          {/* <input type="file" accept="image/*" id="image-upload" hidden />
          <label htmlFor="image-upload" className="btn grey upload-btn">Upload Image</label> */}
        </div>
      </form>
    </>
  );
}

export default Write;
