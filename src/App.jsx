import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import HomePage from './pages/HomePage';
import Artikel from './pages/Artikel';
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
import MateriVidPage2a from './pages/MateriVidPage2';
import MateriVidPage2b from './pages/MateriVidPage2';

import MateriVidPage3 from './pages/MateriVidPage3';


import MateriVidPage4 from './pages/MateriVidPage4';

import MateriVidPage5 from './pages/MateriVidPage5';

import MateriVidPage6 from './pages/MateriVidPage6';

import './App.css';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        <main className="flex-grow">
          {/* Routing to pages */}
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/MateriPage" element={<Materipage />} />
            <Route path="/MateriPage2" element={<MateriPage2 />} />

            {/* MateriDetailPage */}
            <Route path="/MateriDetailPage1" element={<MateriDetailPage1 />} />
            <Route path="/MateriDetailPage2" element={<MateriDetailPage2 />} />
            <Route path="/MateriDetailPage3" element={<MateriDetailPage3 />} />
            <Route path="/MateriDetailPage4" element={<MateriDetailPage4 />} />
            <Route path="/MateriDetailPage5" element={<MateriDetailPage5 />} />
            <Route path="/MateriDetailPage6" element={<MateriDetailPage6 />} />

            {/* MateriVidPage */}
            <Route path="/MateriVidPage1" element={<MateriVidPage1 />} />


            <Route path="/MateriVidPage2" element={<MateriVidPage2 />} />
            <Route path="/MateriVidPage2a" element={<MateriVidPage2a />} />
            <Route path="/MateriVidPage2b" element={<MateriVidPage2b />} />

            <Route path="/MateriVidPage3" element={<MateriVidPage3 />} />


            <Route path="/MateriVidPage4" element={<MateriVidPage4 />} />


            <Route path="/MateriVidPage5" element={<MateriVidPage5 />} />

            <Route path="/MateriVidPage6" element={<MateriVidPage6 />} />

          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}
