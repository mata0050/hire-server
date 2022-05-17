/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useContext } from 'react';
import Logo from './Logo';
import { auth } from '../lib/firebase';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState<Boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);
  const { user, userProfile } = useContext(UserContext);

  const onShowDropdown = () => setShowDropdown((prevState) => !prevState);

  const onShowMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  const hideMobileMenu = () => setShowMobileMenu(false);

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          <Logo />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          onClick={onShowMobileMenu}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={
            showMobileMenu
              ? 'collapse navbar-collapse show'
              : 'collapse navbar-collapse '
          }
        >
          <ul className='navbar-nav ms-auto'>
            {!user ? (
              <>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdownMenuLink'
                    role='button'
                    onClick={onShowDropdown}
                  >
                    Hire A Team Member
                  </a>
                  <ul
                    className={
                      showDropdown ? 'dropdown-menu show' : 'dropdown-menu'
                    }
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <li>
                      <a
                        className='dropdown-item'
                        href='#hire-server'
                        onClick={hideMobileMenu}
                      >
                        Hire Server
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='#hire-busser'
                        onClick={hideMobileMenu}
                      >
                        Hire Busser
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='#hire-dishware'
                        onClick={hideMobileMenu}
                      >
                        Hire Dishwasher
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <a
                    href='#learn'
                    className='nav-link'
                    onClick={hideMobileMenu}
                  >
                    About Us
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    href='#questions'
                    className='nav-link'
                    onClick={hideMobileMenu}
                  >
                    Login
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <a
                    href='/dashboard'
                    className='nav-link'
                    onClick={hideMobileMenu}
                  >
                    Dashboard
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href='/'
                    className='nav-link'
                    onClick={() => {
                      auth.signOut();
                      hideMobileMenu();
                    }}
                  >
                    Logout
                  </a>
                </li>
                <li className='nav-item pt-2'>
                  <img
                    src={userProfile?.avatar}
                    alt=''
                    className='img-fluid rounded-circle w-50 px-3 '
                  />
                </li>
              </>
            )}

            {!user && (
              <li className='nav-item'>
                <a
                  href='/register'
                  className='nav-link'
                  onClick={hideMobileMenu}
                >
                  Register
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
