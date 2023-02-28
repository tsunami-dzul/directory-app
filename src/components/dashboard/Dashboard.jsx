import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPerson } from '../../services/person.service';
import PageTitle from '../form/PageTitle';
import Pagination from '../form/Pagination';
import Search from '../form/Search';

const Dashboard = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons);

  console.log(persons);

  useEffect(() => {
    getPerson(dispatch);
  }, [dispatch]);

  return (
    <>
      <PageTitle title='Dashboard' />

      <Search />

      <div className='row'>
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
              {persons?.map((person) => (
                <tr key={person.id}>
                  <td>
                    {person.name} {persons.lastName}
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
                <td colSpan={5}>
                  <Pagination />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
