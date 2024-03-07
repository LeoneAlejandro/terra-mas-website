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
            <div className={isScrolled ? 'left-buttons' : 'left-buttons-transpartent'}>
                <ul>
                    <li><a className='headerContactButton' href="https://www.dekalb.com.ar/es-ar/productos-maiz.html">DEKALB</a></li>
                    <li><a className='headerContactButton' href="https://www.cropscience.bayer.com.ar/soluciones-maiz">INSUMOS</a></li>
                    <li><a className='headerContactButton' href="/contacto">CONTACTO</a></li>
                </ul>
            </div>

            <div className="right-buttons">
                <ul>
                    <li><a className='headerLoginButton' href="#">LOGIN</a></li>
                </ul>
            </div>
        </nav> 
    </header>
  );
}