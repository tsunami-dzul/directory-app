import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <nav aria-label='...'>
      <ul className='pagination pagination-sm  justify-content-end'>
        <li className='page-item active' aria-current='page'>
          <span className='page-link'>1</span>
        </li>
        <li className='page-item'>
          <Link className='page-link' to='#'>
            2
          </Link>
        </li>
        <li className='page-item'>
          <Link className='page-link' to='#'>
            3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
