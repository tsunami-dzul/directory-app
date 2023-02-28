import Button from '../form/Button';
import Input from '../form/Input';

const AddPerson = (props) => {
  const { id } = props;

  return (
    <div
      className='modal'
      id={id}
      tabIndex='-1'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Add new person</h5>
            <Button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>
            <div className='mb-2'>
              <Input
                className='form-control form-control-sm'
                type='text'
                label='Name'
              />
            </div>
            <div className='mb-2'>
              <Input
                className='form-control form-control-sm'
                type='text'
                label='Last name'
              />
            </div>
            <div className='mb-2'>
              <Input
                className='form-control form-control-sm'
                type='text'
                label='Email'
              />
            </div>
            <div className='mb-2'>
              <Input
                className='form-control form-control-sm'
                type='text'
                label='Phone number'
              />
            </div>
            <div className='mb-2'>
              <Input
                className='form-control form-control-sm'
                type='text'
                label='Address'
              />
            </div>
            <div className='mb-2'>
              <Input
                className='form-control form-control-sm'
                type='text'
                label='Zip code'
              />
            </div>
          </div>
          <div className='modal-footer'>
            <Button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              text='Close'
            />
            <Button
              type='button'
              className='btn btn-dark'
              text='Save changes'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
