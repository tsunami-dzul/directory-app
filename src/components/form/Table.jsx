import Pagination from './Pagination';

const Table = (props) => {
  const { columns, data } = props;

  return (
    <table className='table table-striped table-hover table-sm'>
      <thead>
        <tr>
          {columns.map((column) => (
            <td key={column.id}>{column}</td>
          ))}
        </tr>
        {/* <tr>                
                <th>Full name</th>
                <th>Address</th>
                <th>Zip code</th>
                <th>Email</th>
                <th>Phone number</th>
              </tr> */}
      </thead>
      <tbody>
        {/* { data.map((d) => ) } */}
        <tr>
          <td>Esdras Dzul</td>
          <td>Prolongacion Gonzalez Gallo, 1872, condominio datil</td>
          <td>45602</td>
          <td>xdzul@hotmail.com</td>
          <td>3315181680</td>
        </tr>
        <tr>
          <td>Erika salinas</td>
          <td>Juarez Pedroza, Colonia San Martin 254</td>
          <td>8501</td>
          <td>tery@hotmail.com</td>
          <td>9716548325</td>
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
  );
};

export default Table;
