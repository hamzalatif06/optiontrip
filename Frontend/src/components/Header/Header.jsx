import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Format date based on current language
  const formatDate = () => {
    const date = new Date();
    try {
      return date.toLocaleDateString(i18n.language || 'en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  };

  return (
    <header className="main_header_area">
      <div className="header-content py-1 bg-theme">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="links">
            <ul>
              <li>
                <a href="#" className="white">
                  <i className="icon-calendar white"></i> {formatDate()}
                </a>
              </li>
              <li>
                <a href="#" className="white">
                  <i className="icon-location-pin white"></i> {t('header.location')}
                </a>
              </li>
        
            </ul>
          </div>
          <div className="links float-right">
            <ul>
              <li>
                <a href="https://www.facebook.com/optiontrip" target="_blank" rel="noopener noreferrer" className="white">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="white">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/option_trip" target="_blank" rel="noopener noreferrer" className="white">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@optiontrip" target="_blank" rel="noopener noreferrer" className="white">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="white">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="header_menu" id="header_menu">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  <img src="/images/newLogo.png" alt="OptionTrip" />
                </Link>
              </div>
              
              <div className={`navbar-collapse1 d-flex align-items-center ${isMenuOpen ? 'show' : ''}`} id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav" id="responsive-menu">
                  <li className={`dropdown submenu ${isActive('/')}`}>
                    <Link to="/" className="dropdown-toggle">
                      {t('common.home')}
                    </Link>
                  </li>
                  <li className={isActive('/about')}>
                    <Link to="/about">{t('common.about')}</Link>
                  </li>
                  <li className={`dropdown submenu ${isActive('/destinations')}`}>
                    <Link to="/destinations" className="dropdown-toggle">
                      {t('common.destinations')} <i className="icon-arrow-down" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className={`dropdown submenu ${isActive('/tours')}`}>
                    <Link to="/tours" className="dropdown-toggle">
                      {t('common.tours')} <i className="icon-arrow-down" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className={`dropdown submenu ${isActive('/blog')}`}>
                    <Link to="/blog" className="dropdown-toggle">
                      {t('common.blog')} <i className="icon-arrow-down" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="search-main">
                    <a href="#search1" className="mt_search">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="register-login d-flex align-items-center">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="me-3">
                  <i className="icon-user"></i> {t('common.login')}
                </a>
                <Link to="/contact" className="nir-btn white">{t('common.contact')}</Link>
              </div>

              <div id="slicknav-mobile" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

