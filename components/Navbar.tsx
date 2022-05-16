import Link from 'next/link';

// Top navbar
export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        <a href='#' className='navbar-brand'>
          Hire Server
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navmenu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle show'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='true'
              >
                Hire A Team Member
              </a>
              <ul
                className='dropdown-menu show'
                aria-labelledby='navbarDropdownMenuLink'
                data-bs-popper='static'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Hire Server
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Hire Busser
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Hire Dishwasher
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#learn' className='nav-link'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a href='#questions' className='nav-link'>
               Login
              </a>
            </li>
            <li className='nav-item'>
              <a href='#instructors' className='nav-link'>
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function fun() {
  const user = null;
  const username = null;
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <ul>
          <li>
            <Link href='/'>
              <button className='btn-logo'>FEED</button>
            </Link>
          </li>

          {/* user is signed-in and has username */}
          {username && (
            <>
              <li className='push-left'>
                <Link href='/admin'>
                  <button className='btn-blue'>Write Posts</button>
                </Link>
              </li>
              <li>
                <Link href={`/${username}`}>
                  <img src={user?.photoURL} alt='ccccc' />
                </Link>
              </li>
            </>
          )}

          {/* user is not signed OR has not created username */}
          {!username && (
            <li>
              <Link href='/enter'>
                <button className='btn-blue'>Log in</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
