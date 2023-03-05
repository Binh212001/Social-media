import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/auth/authAction';
import './header.scss';
function Header() {
  const [mode, setMode] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };

  const setLikeMode = () => {
    document.querySelector('body').removeAttribute('data-theme', 'dark');
  };

  const handleDarkMode = () => {
    setMode(!mode);
    if (mode === true) {
      setDarkMode();
    } else {
      setLikeMode();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth/login');
  };
  return (
    <div className='bg-mode'>
      <div className='container  py-2 '>
        {/* Header left */}
        <div className='d-block d-sm-block d-md-flex d-lg-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center justify-content-between gap-3'>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
              }}>
              <h3 className='text-primary '>SocialMedia</h3>
            </Link>

            <div className='search position-relative  '>
              <input
                type='text'
                className='search__input'
                placeholder='Find friends'
              />
              <i className='fa fa-search' aria-hidden='true'></i>
            </div>
            <i
              onClick={() => setIsMenu(!isMenu)}
              className='fa fa-bars d-sm-block d-block d-md-none d-lg-none'
              aria-hidden='true'></i>
          </div>
          {/* End Header left */}

          {/* Header right */}

          <ul
            className={`${
              !isMenu ? 'd-none d-sm-none' : ' d-sm-flex d-flex '
            }d-lg-flex d-md-flex d-sm-flex d-flex flex-row-reverse gap-4 align-items-center m-0`}
            style={{}}>
            <li className='position-relative logout'>
              <i className='fa fa-gear ' aria-hidden='true'></i>
              <div className='position-absolute p-1 logout__item'>
                <div className='menu__hover' onClick={() => handleLogout()}>
                  Log out
                </div>
              </div>
            </li>
            <li>
              <Link to='/people'>
                <i className='fa fa-user' aria-hidden='true'></i>
              </Link>
            </li>
            <li>
              <i className='fa-solid fa-message'></i>
            </li>
            <li
              onClick={() => {
                handleDarkMode();
              }}
              className={`mode d-flex ${
                mode ? 'justify-content-start' : 'justify-content-end'
              }  `}>
              {mode ? (
                <i className='fa-solid fa-moon'></i>
              ) : (
                <i className='fa-solid fa-sun'></i>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
