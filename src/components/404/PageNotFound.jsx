import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link
        to='/'
        className='btn btn-link'
      >
        Home
      </Link>
    </>
  );
};

export default PageNotFound;
