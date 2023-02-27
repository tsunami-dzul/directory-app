import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from '../components/404/PageNotFound';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/home/Home';
import Content from '../components/layout/Content';
import Person from '../components/person/Person';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Content />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/dashboard'
          element={<Dashboard />}
        />
        <Route
          path='person'
          element={<Person />}
        />
      </Route>

      <Route
        path='*'
        element={<PageNotFound />}
      />
    </Routes>
  );
};

export default AppRouter;
