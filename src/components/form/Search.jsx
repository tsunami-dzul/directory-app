import Button from './Button';
import Input from './Input';

const Search = () => {
  return (
    <>
      <Input className='form-control mb-2' type='text' placeholder='Search person' />
      <Button className='btn btn-dark mb-4' text='Search' />
    </>
  );
};

export default Search;
