import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
    {/* Routing components with React Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
