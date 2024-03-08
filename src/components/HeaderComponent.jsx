import '../css/HeaderComponent.css'
import logo from '../assets/LOGO_TERRAMAS sin letars PNG.png'
import logo_monocr from '../assets/LOGO_TERRAMAS_monocrom.png'
import React, { useState, useEffect } from 'react';

export default function HeaderComponent() { 
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'header header-solid' : 'header'}>
        <nav className='navHeader'>
            <a href="/">
                <div className="logo">
                {/* <div className={isScrolled ? 'logo' : 'logo-monocr'}> */}
                    <img src={isScrolled ? logo : logo_monocr} alt="Terra Mas Logo" />
                </div>
            </a>    

            {/* <div className="left-buttons"> */}
            { isScrolled &&
              <div className='left-buttons'>
                  <ul>
                      <li><a className='headerContactButton' href="https://www.dekalb.com.ar/es-ar/productos-maiz.html">DEKALB</a></li>
                      <li><a className='headerContactButton' href="https://www.cropscience.bayer.com.ar/soluciones-maiz">INSUMOS</a></li>
                      <li><a className='headerContactButton' href="/contacto">CONTACTO</a></li>
                  </ul>
              </div>
            }

            <div className="right-buttons">
                <ul>
                    <a href="https://www.instagram.com/terramassrl" target="_blank" rel="noopener noreferrer">
                    <svg className="instagram-logo" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">
                      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                    </svg>
                    </a>
                  <li><a className='headerLoginButton' href="/login">LOGIN</a></li>
                </ul>
            </div>
        </nav> 
    </header>
  );
}