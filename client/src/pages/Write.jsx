/* eslint-disable react/button-has-type */
// import './Write.scss';

function Write() {
  return (
    <>
      <div className="banner">
        <input type="file" accept="image/*" id="banner-upload" hidden />
        <label htmlFor="banner-upload" className="banner-upload-btn"><img src="img/upload.png" alt="upload banner" /></label>
      </div>

      <div className="blog">
        <textarea type="text" className="title" placeholder="Blog title..." />
        <textarea type="text" className="article" placeholder="Start writing here..." />
      </div>

      <div className="blog-options">
        <button className="btn dark publish-btn">publish</button>
        <input type="file" accept="image/*" id="image-upload" hidden />
        <label htmlFor="image-upload" className="btn grey upload-btn">Upload Image</label>
      </div>
    </>
  );
}

export default Write;
