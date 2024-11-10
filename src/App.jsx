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
import Berita1 from './pages/Berita/Berita1';
import Berita2 from './pages/Berita/Berita2';
import Berita3 from './pages/Berita/Berita3';
import Berita4 from './pages/Berita/Berita4';
import Berita5 from './pages/Berita/Berita5';
import Berita6 from './pages/Berita/Berita6';
import Berita7 from './pages/Berita/Berita7';
import Berita8 from './pages/Berita/Berita8';
import Berita9 from './pages/Berita/Berita9';
import Berita10 from './pages/Berita/Berita10';
import Berita11 from './pages/Berita/Berita11';
import Berita12 from './pages/Berita/Berita12';
import Berita13 from './pages/Berita/Berita13';
import Berita14 from './pages/Berita/Berita14';
import DashboardBerita from './pages/Berita/DashboardBerita';

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

          {/* Dashboard Berita */}
          <Route path="/berita" element={<DashboardBerita/>} />
          {/* Laman Berita */}
          <Route path="/berita/1" element={<Berita1 />} />
          <Route path="/berita/2" element={<Berita2 />} />
          <Route path="/berita/3" element={<Berita3 />} />
          <Route path="/berita/4" element={<Berita4 />} />
          <Route path="/berita/5" element={<Berita5 />} />
          <Route path="/berita/6" element={<Berita6 />} />
          <Route path="/berita/7" element={<Berita7 />} />
          <Route path="/berita/8" element={<Berita8 />} />
          <Route path="/berita/9" element={<Berita9 />} />
          <Route path="/berita/10" element={<Berita10 />} />
          <Route path="/berita/11" element={<Berita11 />} />
          <Route path="/berita/12" element={<Berita12 />} />
          <Route path="/berita/13" element={<Berita13 />} />
          <Route path="/berita/14" element={<Berita14/>} />
          
          {/* Tentang Kami */}
          <Route path="/tentang-kami" element={<TentangKami />} />
          </Routes>
        </main>

        <Footer/>
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
    </ArticleProvider>
  );
}
