import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');
  const DASHBOARD_PATH = '/dashboard';
  const PERSON_PATH = '/person';
  const ACTIVE_CLASS_NAME = 'active';

  useEffect(() => {
    setCurrentPath(location.pathname);
  },[location]);

  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/'
        >
          Directory
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className={`nav-link ${currentPath === DASHBOARD_PATH ? ACTIVE_CLASS_NAME : ''}`}
                aria-current='page'
                to={DASHBOARD_PATH}
              >
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${currentPath === PERSON_PATH ? ACTIVE_CLASS_NAME : ''}`}
                to={PERSON_PATH}
              >
                Person
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='&weather'
              >
                Weather system
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
