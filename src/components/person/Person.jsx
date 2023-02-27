import Button from '../form/Button';
import PageTitle from '../form/PageTitle';
import Pagination from '../form/Pagination';
import Search from '../form/Search';
import AddPerson from './AddPerson';

const Person = () => {
  return (
    <>
      <PageTitle title='Person' />

      <Search />

      <div className='row'>
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
              <tr>
                <td>Esdras</td>
                <td>Dzul</td>
                <td>
                  <Button className='btn btn-sm btn-link' text='Edit' />
                </td>
                <td>
                  <Button className='btn btn-sm btn-link' text='Delete' />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan={5}>
                  <Pagination />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <Button className='btn btn-dark btn-sm' data-bs-toggle='modal' data-bs-target='#add-person' text={'Add new person'} />
        </div>
      </div>

      <AddPerson id='add-person' />
    </>
  );
};

export default Person;
