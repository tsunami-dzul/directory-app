import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../form/Button';
import PageTitle from '../form/PageTitle';
import Pagination from '../form/Pagination';
import Search from '../form/Search';
import AddEditPerson from './AddEditPerson';
import DeletePerson from './DeletePerson';
import { getPeople } from '../../services/people.service';

const People = () => {
  const dispatch = useDispatch();
  const { loading, error, totalPages, currentPage, people } = useSelector((state) => state);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  const onSelectedPersonHandle = (person) => {
    setSelectedPerson(person);
  };

  const handleAddNewPerson = () => {
    setSelectedPerson(null);
  };

  return (
    <>
      <PageTitle title='People' />

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
          <div
            className='alert alert-danger'
            role='alert'
          >
            Sorry, something went wrong, please contact the administrator.
          </div>
        ) : (
          <div className='col-12'>
            <table className='table table-striped table-hover table-sm'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.lastName}</td>
                    <td>
                      <Button
                        className='btn btn-link btn-sm'
                        data-bs-toggle='modal'
                        data-bs-target='#add-person'
                        text='Edit'
                        onClick={() => onSelectedPersonHandle(person)}
                      />
                    </td>
                    <td>
                      <Button
                        className='btn btn-sm btn-link'
                        data-bs-toggle='modal'
                        data-bs-target='#delete-person'
                        text='Delete'
                        onClick={() => onSelectedPersonHandle(person)}
                      />
                    </td>
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

      <div className='row'>
        <div className='col-12'>
          <Button
            className='btn btn-dark btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#add-person'
            text='Add new person'
            onClick={handleAddNewPerson}
          />
        </div>
      </div>

      <AddEditPerson
        id='add-person'
        selectedPerson={selectedPerson}
      />
      <DeletePerson
        id='delete-person'
        selectedPerson={selectedPerson}
      />
    </>
  );
};

export default People;
