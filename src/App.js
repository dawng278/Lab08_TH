import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
