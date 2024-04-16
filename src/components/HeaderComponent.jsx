import '../css/HeaderComponent.css'
import logo from '../assets/LOGO_TERRAMAS sin letars PNG.png'
import logo_monocr from '../assets/LOGO_TERRAMAS_monocrom.png'
import logoutImg from '../assets/logout.jpg'
import closeButton from '../assets/close_icon.jpg'
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from './security/AuthContext'
import { Link } from 'react-router-dom'
import '../css/LogOutPopup.css'

export default function HeaderComponent() { 

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleOpenPopup() {
    setShowPopup(true)
  }

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const authContext = useAuth()
  const isAuthenticated = authContext.isAuthenticated
  const logoutName = authContext.firstName
  const isAdmin = authContext.userRole === "ADMIN";

  function logout() {
    authContext.logout()
    window.location.href = "/"
  }

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

  return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Para hacer click fuera de la LogoutCard
  const modalRef = useRef();

  function closeModal(e) {
    if(modalRef.current === e.target) {
      setShowPopup(false)
    }
  }

  return (
    <header className={isScrolled ? 'header header-solid' : 'header'}>
        <nav className='navHeader'>
          
          {showPopup && 
            <div className="gray-background" ref={modalRef} onClick={closeModal}>
                <div className='logout-card'>
                  <img className='x-close-button' src={closeButton} alt="X" onClick={() => setShowPopup(false) }/>
                  <img className='logout-card-img' src={logoutImg} alt="Imagen de deslogueo"/>
                  <p className='logout-text'>Estas por cerra sesión, estas seguro?</p>
                  <button className='formButton' onClick={() => (setShowPopup(false), logout())}>
                    {/* <span className='transition'></span> */}
                    Confirmar
                    </button>
                </div>
            </div>
          }

          <Link to="/">
            <img className="logo" src={isScrolled ? logo : logo_monocr} alt="Terra Mas Logo" />
          </Link>

          { isScrolled &&
            <div className='left-buttons'>
                <ul>
                  <li><Link className='link-header' to="https://www.agro.bayer.com.ar/dekalb">DEKALB</Link></li>
                  <li><Link className='link-header' to="https://www.cropscience.bayer.com.ar/soluciones-maiz">BAYER</Link></li>
                  <li><Link className='link-header' to="/contacto">CONTACTO</Link></li>
                </ul>
            </div>
          }


          <div className="right-buttons">
            <a href="https://www.instagram.com/terramassrl" target="_blank" rel="noopener noreferrer">
              <svg className="instagram-logo" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
              </svg>
            </a>

            {!isAuthenticated && <Link className='link-header' to="/login" onClick={handleMouseLeave}>LOGIN</Link>}

            { isAuthenticated &&
            <ul>
              <div className='ddm-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <button className={`ddm-button ${isDropdownVisible ? 'dropdownActive' : ''}`}>¡Hola, {logoutName}!</button>
                    {isDropdownVisible && 
                        <div className="dropdown-menu">
                          <ul className="ddm-ul">
                            {isAdmin && <Link to="" className="ddm-link" onClick={handleMouseLeave} >Stock</Link>}
                              <Link to="/perfil" className='ddm-link' onClick={handleMouseLeave}>Mi Perfil</Link>
                              <Link className='ddm-link' onClick={handleOpenPopup}>Cerrar Sesión</Link>
                          </ul>
                      </div>                        
                    }
              </div>
            </ul>
            }

          </div>
        </nav> 
    </header>
  );
}