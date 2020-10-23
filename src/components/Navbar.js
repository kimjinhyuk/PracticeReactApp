import React, { useState, useEffect } from 'react';
import { ButtonSignUp } from './Button';
import { Link } from 'react-router-dom';
import '../style.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // 창 크기에 따라 버튼 사라짐
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // 창 크기 줄어졌을때 회원가입버튼 생성
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FeB  &nbsp;
          <i className='fab fa-angrycreative' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/record'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                RECORD
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/test'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                TEST
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <ButtonSignUp buttonStyle='btn--outline'>SIGN UP</ButtonSignUp>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;