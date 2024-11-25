import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import HomePage from './pages/HomePage';
import Materipage from './pages/MateriPage';
import MateriPage2 from './pages/MateriPage2';

import MateriDetailPage1 from './pages/MateriDetailPage1';
import MateriDetailPage2 from './pages/MateriDetailPage2';
import MateriDetailPage3 from './pages/MateriDetailPage3';
import MateriDetailPage4 from './pages/MateriDetailPage4';
import MateriDetailPage5 from './pages/MateriDetailPage5';
import MateriDetailPage6 from './pages/MateriDetailPage6';

import MateriVidPage1 from './pages/MateriVidPage1';
import MateriVidPage2 from './pages/MateriVidPage2';
import MateriVidPage3 from './pages/MateriVidPage3';
import MateriVidPage4 from './pages/MateriVidPage4';
import MateriVidPage5 from './pages/MateriVidPage5';
import MateriVidPage6 from './pages/MateriVidPage6';

import TentangKami from './pages/TentangKami';
import ArticleDashboard from './pages/ArticleDashboard';
import BlogArticle from './pages/BlogArticle';
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

import { ArticleProvider } from './context/ArticleContext';
import ScrollToTop from './component/ScrollToTop';
import './App.css';
import './index.css';

export default function App() {
  return (
    <ArticleProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Scroll to Top */}
          <ScrollToTop />

          {/* Navbar */}
          <Navbar />

          <main className="flex-grow">
            <Routes>
              {/* Halaman Utama */}
              <Route path="/" element={<HomePage />} />

              {/* Materi Pages */}
              <Route path="/MateriPage" element={<Materipage />} />
              <Route path="/MateriPage2" element={<MateriPage2 />} />

              {/* MateriDetail Pages */}
              <Route path="/MateriDetailPage1" element={<MateriDetailPage1 />} />
              <Route path="/MateriDetailPage2" element={<MateriDetailPage2 />} />
              <Route path="/MateriDetailPage3" element={<MateriDetailPage3 />} />
              <Route path="/MateriDetailPage4" element={<MateriDetailPage4 />} />
              <Route path="/MateriDetailPage5" element={<MateriDetailPage5 />} />
              <Route path="/MateriDetailPage6" element={<MateriDetailPage6 />} />

              {/* MateriVid Pages */}
              <Route path="/MateriVidPage1" element={<MateriVidPage1 />} />
              <Route path="/MateriVidPage2" element={<MateriVidPage2 />} />
              <Route path="/MateriVidPage3" element={<MateriVidPage3 />} />
              <Route path="/MateriVidPage4" element={<MateriVidPage4 />} />
              <Route path="/MateriVidPage5" element={<MateriVidPage5 />} />
              <Route path="/MateriVidPage6" element={<MateriVidPage6 />} />

              {/* Artikel */}
              <Route path="/artikel" element={<ArticleDashboard />} />
              <Route path="/blogartikel" element={<BlogArticle />} />
              <Route path="/blogartikel2" element={<BlogArticle2 />} />
              <Route path="/blogartikel3" element={<BlogArticle3 />} />
              <Route path="/blogartikel4" element={<BlogArticle4 />} />
              <Route path="/blogartikel5" element={<BlogArticle5 />} />
              <Route path="/blogartikel6" element={<BlogArticle6 />} />

              {/* Berita */}
              <Route path="/berita" element={<DashboardBerita />} />
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
              <Route path="/berita/14" element={<Berita14 />} />

              {/* Tentang Kami */}
              <Route path="/tentang-kami" element={<TentangKami />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ArticleProvider>
  );
}
