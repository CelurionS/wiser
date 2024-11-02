import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './App.css';
import './index.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      <main className="flex-grow">
        <h1 className="text-3xl font-bold underline bg-red-400">
          Hello world!
        </h1>
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
