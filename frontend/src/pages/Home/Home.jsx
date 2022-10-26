import './Home.scss';

import Posts from '../../components/Posts/Posts';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to the blog</h1>
      <Posts />
    </div>
  );
}

export default Home;
