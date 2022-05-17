export default function SideNavBar({}) {
  return (
    <ul className='nav flex-column bg-dark' style={{ height: '100vh ' }}>
      <li className='nav-item mt-5 pt-5'>
        <a className='nav-link active link-light' aria-current='page' href='#'>
          Active
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link link-light' href='#'>
          Link
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link link-light' href='#'>
          Link
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled link-light'>Disabled</a>
      </li>
    </ul>
  );
}
