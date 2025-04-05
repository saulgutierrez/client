import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import NotFound from './pages/NotFound';
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
          {/* Dynamic route for articles */}
          {/* The :name part of the path is a route parameter */}
          {/* It allows us to access the article name in the Article component */}
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
