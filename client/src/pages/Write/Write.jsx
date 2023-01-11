import './Write.scss';

function Write() {
  return (
    <div className="container">

      <div className="write">
        <form className="writeForm" onSubmit="/">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus" />
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="writeInput writeText"
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
