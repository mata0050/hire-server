/* eslint-disable @next/next/no-img-element */

import Logo from './Logo';

export default function Hero() {
  return (
    <section className='bg-dark text-light mt-5  p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
      <div className='container'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div>
            <h1 className='col-12 col-lg-5'>
              <Logo />
              is not an agency.
            </h1>
            <p className='lead my-4'>
              <Logo />
              is an on-demand platform that digitally connects skilled workers
              with shifts in healthcare, hospitality, and general labour.
            </p>

            <p className='lead my-4'>
              Using our platform, the staff decide and receive 100% of their
              hourly rate. Hire Server adds on a small fee, starting at 25%, for the
              timely, uncomplicated service.
            </p>

            <button className='btn btn-primary btn-lg mt-2'>
              Hire A Team Member
            </button>
          </div>

          <div className='w-50'>
            <img
              className='img-fluid d-none d-lg-block'
              src='/images/guy-server.png'
              alt='server'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
