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
  const { user } = useContext(UserContext);

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
            {!user ? (
              <>
                <li className='nav-item dropdown'>
                  <span
                    className='nav-link dropdown-toggle'
          
                    id='navbarDropdownMenuLink'
                    role='button'
                    onClick={onShowDropdown}
                  >
                    <a >
                      Hire A Team Member
                    </a>
                  </span>
                  <ul
                    className={
                      showDropdown ? 'dropdown-menu show' : 'dropdown-menu'
                    }
                    aria-labelledby='navbarDropdownMenuLink'
                  >
                    <li>
                      <Link href='#hire-server' onClick={hideMobileMenu}>
                        <a className='dropdown-item'>Hire Server</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#hire-busser' onClick={hideMobileMenu}>
                        <a className='dropdown-item'>Hire Busser</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#hire-dishware' onClick={hideMobileMenu}>
                        <a className='dropdown-item'>Hire Dishwasher</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link href='#learn' onClick={hideMobileMenu}>
                    <a className='nav-link'>About Us</a>
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link href='#questions' onClick={hideMobileMenu}>
                    <a className='nav-link'>Login</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link href='/dashboard' onClick={hideMobileMenu}>
                    <a className='nav-link'>Dashboard</a>
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
                    src={user.avatar}
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
