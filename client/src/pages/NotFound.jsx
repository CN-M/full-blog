import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => (
  <>
    <Header />
    <div>Error 404 - Page Not Foundd</div>
    <h1>Go <Link to="/">Home</Link></h1>
  </>
);

export default NotFound;
