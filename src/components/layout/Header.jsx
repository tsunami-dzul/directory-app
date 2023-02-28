import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const handleOnclick = (activeTab) => {
    setCurrentTab(activeTab);
  };

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
                onClick={() => handleOnclick('dashboard')}
                className={`nav-link ${currentTab === 'dashboard' ? 'active' : ''}`}
                aria-current='page'
                to='/dashboard'
              >
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                onClick={() => handleOnclick('person')}
                className={`nav-link ${currentTab === 'person' ? 'active' : ''}`}
                to='person'
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
