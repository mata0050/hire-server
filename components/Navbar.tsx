/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useContext } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { auth } from '../lib/firebase';
import { UserContext } from '../lib/context';
import styles from '../styles/Navbar.module.scss';
import { useRouter } from 'next/router';

// Top navbar
export default function Navbar() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState<Boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);
  const { userProfile } = useContext(UserContext);

  const onShowDropdown = () => setShowDropdown((prevState) => !prevState);

  const onShowMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  const hideMobileMenu = () => setShowMobileMenu(false);

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        <Link href='/' className='navbar-brand'>
          <a className='navbar-brand'>
            <Logo />
          </a>
        </Link>

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
            {!userProfile ? (
              <>
                <li className='nav-item dropdown'>
                  <span
                    className='nav-link dropdown-toggle'
                    id='navbarDropdownMenuLink'
                    role='button'
                    onClick={onShowDropdown}
                  >
                    <a>Hire A Team Member</a>
                  </span>
                  <ul
                    className={
                      showDropdown ? 'dropdown-menu show' : 'dropdown-menu'
                    }
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <li>
                      <Link href='#hire-server'>
                        <a className='dropdown-item' onClick={hideMobileMenu}>
                          Hire Server
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#hire-busser'>
                        <a className='dropdown-item' onClick={hideMobileMenu}>
                          Hire Busser
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#hire-dishware'>
                        <a className='dropdown-item' onClick={hideMobileMenu}>
                          Hire Dishwasher
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link href='#learn'>
                    <a className='nav-link' onClick={hideMobileMenu}>
                      About Us
                    </a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='/login'>
                    <a className='nav-link' onClick={hideMobileMenu}>
                      Login
                    </a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link href='/dashboard'>
                    <a className='nav-link' onClick={hideMobileMenu}>
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <span
                    onClick={() => {
                      auth.signOut();
                      hideMobileMenu();
                      router.push('/');
                    }}
                  >
                    <a className='nav-link'>Logout</a>
                  </span>
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

            {!userProfile && (
              <li className='nav-item'>
                <Link href='/register'>
                  <a className='nav-link' onClick={hideMobileMenu}>
                    Register
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
