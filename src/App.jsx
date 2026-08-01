
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailedProject from './components/DetailedProject'
import Chief from './components/Chief'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




export default function App() {

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    AOS.init({
      duration: isMobile ? 350 : 500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: isMobile ? 30 : 120,
      delay: isMobile ? 40 : 0,
    });

    const handleResize = () => {
      AOS.refreshHard();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Chief />}></Route>
        <Route path='/detailedproject/:id/:theam' element={<DetailedProject />}></Route>

      </Routes>

    </BrowserRouter>
  )
}