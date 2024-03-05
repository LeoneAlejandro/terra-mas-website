import '../css/HeaderComponent.css'
import logo from '../assets/LOGO_TERRAMAS sin letars PNG.png'
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
                    <img src={logo} alt="Terra Mas Logo" />
                </div>
            </a>    

            <div className="left-buttons">
                <ul>
                    <li><a className='headerContactButton' href="#">DEKALB</a></li>
                    <li><a className='headerContactButton' href="#">INSUMOS</a></li>
                    <li><a className='headerContactButton' href="#">CONTACTO</a></li>
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