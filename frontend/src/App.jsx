import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import SinglePost from './pages/SinglePost/SinglePost';
import Write from './pages/Write/Write';
// Components
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/posts/:postid" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
