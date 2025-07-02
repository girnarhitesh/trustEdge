import React, { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllHomepage from './assets/Commponets/AllHomepage/AllHomepage'
import Navigation from './assets/Commponets/AllHomepage/Navigation/Navigation';
import About from './assets/Commponets/AllHomepage/About us/About'
import Team from './assets/Commponets/AllHomepage/Team/Team'
import Product from './assets/Commponets/AllHomepage/Products/Product'
import { MdOutlineVerticalAlignTop } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './assets/Commponets/AllHomepage/Footer/Footer';
import Contact from './assets/Commponets/Contact/Contact';


function App() {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when scroll > 100px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<AllHomepage />} />
          <Route path="/about" element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        {isVisible && (
          <div className="top-earrow-icone" onClick={scrollToTop}>
            <div className='top-earrow-icones'>
              <span className='top-icone'><MdOutlineVerticalAlignTop /></span>
            </div>
          </div>
        )}
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
