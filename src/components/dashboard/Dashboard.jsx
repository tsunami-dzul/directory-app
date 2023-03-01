import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../services/people.service';
import PageTitle from '../form/PageTitle';
import Pagination from '../form/Pagination';
import Search from '../form/Search';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage, error, loading, people } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <>
      <PageTitle title='Dashboard' />

      <Search />

      <div className='row'>
        {loading ? (
          <div className='col-md-2 mx-auto'>
            <div
              className='spinner-border'
              role='status'
            >
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className='alert alert-danger' role="alert">Sorry, something went wrong, please contact the administrator.</div>
        ) : (
          <div className='col-12'>
            <table className='table table-striped table-hover table-sm'>
              <thead>
                <tr>
                  <th>Full name</th>
                  <th>Address</th>
                  <th>Zip code</th>
                  <th>Email</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr key={person.id}>
                    <td>
                      {person.name} {person.lastName}
                    </td>
                    <td>{person.address.address}</td>
                    <td>{person.address.zipCode}</td>
                    <td>{person.address.email}</td>
                    <td>{person.address.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <div className='pagination-text'>
                      {currentPage} of {totalPages} page(s)
                    </div>
                  </td>
                  <td colSpan={4}>
                    <Pagination />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
