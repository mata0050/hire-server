/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Footer() {
  const { pathname } = useRouter();
  const [listStyles, setListStyles] = useState<string>('');

  useEffect(() => {
    if (pathname !== '/') {
      return setListStyles('list-group-item bg-dark text-white');
    }
    setListStyles('list-group-item');
  }, [pathname]);

  return (
    <div className={pathname === '/dashboard' ? 'd-none' : ''}>
      <div className={pathname !== '/' ? 'bg-dark' : ''}>
        <section className='p-5'>
          <div className='container'>
            <div className='row g-4'>
              <div className='col-md'>
                <h2
                  className={
                    pathname !== '/'
                      ? 'text-center mb-4 text-white'
                      : 'text-center mb-4'
                  }
                >
                  Contact Info
                </h2>
                <ul className='list-group list-group-flush lead'>
                  <li className={listStyles}>
                    <span className='fw-bold'>Main Location:</span> Ottawa,
                    Gatineau Area
                  </li>
                  <li className={listStyles}>
                    <span className='fw-bold'>Phone:</span> (555) 555-5555
                  </li>
                  <li className={listStyles}>
                    <span className='fw-bold'>Email:</span> info@hireserver.com
                  </li>
                  <li className={listStyles}>
                    <span className='fw-bold'>Instagram:</span>{' '}
                    <a href='www.instagram.com'>@hireserver</a>
                  </li>
                  <li className={listStyles}>
                    <span className='fw-bold'>Facebook: </span>
                    <a href='www.instagram.com'>@hireserver</a>
                  </li>
                </ul>
              </div>
              <div className='col-md'>
                <img
                  src='/images/server-2.jpg'
                  alt='Hire a server'
                  className='img-fluid rounded-3'
                />
              </div>
            </div>
          </div>
        </section>

        <footer className='p-5 bg-dark text-white text-center position-relative'>
          <div className='container'>
            <p className='lead'>
              Copyright &copy; 2022{' '}
              <span className='text-warning'>Hire Server</span>
            </p>

            <a href='#' className='position-absolute bottom-0 end-0 p-5'>
              <i className='bi bi-arrow-up-circle h1'></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
