import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import logo from '/public/logo.svg'

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);


  useEffect(() => {
    const burger = document.querySelector('.burger')

    const burgerMenu = () => {
      burger.addEventListener('click', () => {
        setMenuActive((a) => !a)
      })
    }

    burgerMenu()
  }, [])

  useEffect(() => {
    const search = document.querySelector('.search')

    const burgerMenu = () => {
      search.addEventListener('click', () => {
        setSearchActive((a) => !a)
      })
    }

    burgerMenu()
  }, [])



  useEffect(() => {
    const handleBodyLock = () => {
      if (isMenuActive) {
        document.body.classList.add('locked')
      } else {
        document.body.classList.remove('locked')
      }
    }

    handleBodyLock()
  }, [isMenuActive])


  const handleLinkClick = () => {
    setMenuActive(false)
  }

  return (
    <nav>
      <div className="container">
        <div className="navbar">

          <div className="burger__icon">
            <div className={`burger ${isMenuActive ? 'active-burger' : ''}`}>
              <span></span>
            </div>
          </div>

          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className={`menu ${isMenuActive ? 'active' : ''}`}>
            <Link to="/afisha" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Афиша
            </Link>
            <Link to="/media" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Медиа
            </Link>
            <Link to="/movies" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Фильмы
            </Link>
            <Link to="/actors" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Актёры
            </Link>
            <Link to="/news" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Новости
            </Link>
            <Link to="/collections" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Подборки
            </Link>
            <Link to="/category" className="menu__item-link" data-scroll onClick={handleLinkClick}>
              Категории
            </Link>
          </div>

          <button className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="52" viewBox="0 0 55 52" fill="none">
              <rect x="0.5" y="0.5" width="54" height="51" rx="9.5" fill="white" stroke="white" />
              <path d="M30.1087 29.1087L35 34M31.7391 24.8696C31.7391 28.1112 29.1112 30.7391 25.8696 30.7391C22.6279 30.7391 20 28.1112 20 24.8696C20 21.6279 22.6279 19 25.8696 19C29.1112 19 31.7391 21.6279 31.7391 24.8696Z" stroke="#3657CB" />
            </svg>

          </button>

          <button className="login-btn">
            <span>Войти</span>
            <svg fill="#fff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#fff"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <g> <path d="M305,149.998H121.215l44.392-44.392c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-69.998,69.998 c-5.858,5.857-5.858,15.355,0,21.213l69.998,70.002c2.929,2.929,6.767,4.394,10.606,4.394c3.838-0.001,7.678-1.465,10.606-4.393 c5.857-5.858,5.858-15.355,0-21.213l-44.394-44.396H305c8.284,0,15-6.716,15-15C320,156.714,313.284,149.998,305,149.998z"></path> <path d="M155,300H40V30h115c8.284,0,15-6.716,15-15s-6.716-15-15-15H25c-8.284,0-15,6.716-15,15v300c0,8.284,6.716,15,15,15h130 c8.284,0,15-6.716,15-15S163.284,300,155,300z"></path> </g> </g></svg>
          </button>


        </div>

        <input className={`search-input ${isSearchActive ? 'active' : ''}`} placeholder='Search' type="text" />

      </div>
    </nav>
  );
};

export default Navbar;
