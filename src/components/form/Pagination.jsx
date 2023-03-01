import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <>      
      <nav>
        <ul className='pagination justify-content-end'>        
          <li className='page-item'>
            <Link
              className='page-link'
              href='#'
            >
              Previous
            </Link>
          </li>       
          <li className='page-item'>
            <Link
              className='page-link'
              href='#'
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
