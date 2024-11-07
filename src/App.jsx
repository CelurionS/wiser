import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import HomePage from './pages/HomePage';
import Materipage from './pages/MateriPage';

import './App.css';
import './index.css';

import TentangKami from './pages/TentangKami';
import ArticleDashboard from './pages/ArticleDashboard';
import BlogArticle from './pages/BlogArticle';
import { ArticleProvider } from './context/ArticleContext';
import ScrollToTop from './component/ScrollToTop';
import BlogArticle2 from './pages/BlogArticle2';
import BlogArticle3 from './pages/BlogArticle3';
import BlogArticle4 from './pages/BlogArticle4';
import BlogArticle5 from './pages/BlogArticle5';
import BlogArticle6 from './pages/BlogArticle6';

export default function App() {
  return (
   <ArticleProvider>
    <Router>
    <ScrollToTop />
      <div className="w-auto">
        {/* Navbar at the top */}
        <Navbar />

        <main className="flex-grow">
          {/* Routing to control page display */}
          <Routes>
            <Route path="/HomePage" element={<HomePage />} /> {/* Default landing page */}
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/MateriPage" element={<Materipage/>}/>

            {/* Laman Dashboard Artikel */}
          <Route path="/" element={<ArticleDashboard />} />
          
          {/* Laman Blog Artikel */}
          <Route path="/blogartikel" element={<BlogArticle />} />
          <Route path="/blogartikel2" element={<BlogArticle2 />} />
          <Route path="/blogartikel3" element={<BlogArticle3 />} />
          <Route path="/blogartikel4" element={<BlogArticle4 />} />
          <Route path="/blogartikel5" element={<BlogArticle5 />} />
          <Route path="/blogartikel6" element={<BlogArticle6 />} />
          
          {/* Tentang Kami */}
          <Route path="/tentang-kami" element={<TentangKami />} />
          </Routes>
        </main>
      
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
    </ArticleProvider>
  );
}
