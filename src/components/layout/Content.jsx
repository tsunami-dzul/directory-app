import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Content = () => {
  return (
    <>
      <Header />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Content;
