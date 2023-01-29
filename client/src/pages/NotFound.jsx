import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <div>Error 404 - Page Not Foundd</div>
    <h1>Go <Link to="/">Home</Link></h1>
  </>
);

export default NotFound;
