import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import HomePage from './pages/HomePage';
import Artikel from './pages/Artikel';
import Materipage from './pages/MateriPage';

import './App.css';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />

        <main className="flex-grow">
          {/* Routing to control page display */}
          <Routes>
            <Route path="/HomePage" element={<HomePage />} /> {/* Default landing page */}
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/MateriPage" element={<Materipage/>}/>
          </Routes>
        </main>
      
        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}
