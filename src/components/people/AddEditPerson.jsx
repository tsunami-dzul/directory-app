import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Modal from '../form/Modal';
import Form from '../form/Form';
import Button from '../form/Button';

const AddEditPerson = (props) => {
  const { id, selectedPerson } = props;
  let initialFormValues = {
    name: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    zipCode: '',
  };

  const [formValue, setFormValue] = useState(initialFormValues);

  useEffect(() => {
    setFormValue({
      name: selectedPerson?.name ?? '',
      lastName: selectedPerson?.lastName ?? '',
      address: selectedPerson?.address?.address ?? '',
      email: selectedPerson?.address?.email ?? '',
      phoneNumber: selectedPerson?.address?.phoneNumber ?? '',
      zipCode: selectedPerson?.address?.zipCode ?? '',
    });

    return () => {
      setFormValue(initialFormValues);
    };
  }, [selectedPerson]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    console.log('submit form');
  };

  const modalFooter = (
    <div className='modal-footer'>
      <Button
        type='button'
        className='btn btn-secondary'
        data-bs-dismiss='modal'
        text={'Close'}
      />
      <Button
        type={'submit'}
        className='btn btn-dark'
        text={'Save'}
      />
    </div>
  );

  const modalBody = (
    <Form onSubmit={onHandleSubmit}>
      <div className='mb-2'>
        <Input
          className='form-control form-control-sm'
          name='name'
          type='text'
          label='Name'
          value={formValue?.name}
          onChange={handleOnChange}
        />
      </div>
      <div className='mb-2'>
        <Input
          className='form-control form-control-sm'
          name='lastName'
          type='text'
          label='Last name'
          value={formValue.lastName}
          onChange={handleOnChange}
        />
      </div>
      <div className='mb-2'>
        <Input
          className='form-control form-control-sm'
          name='email'
          type='text'
          label='Email'
          value={formValue.email}
          onChange={handleOnChange}
        />
      </div>
      <div className='mb-2'>
        <Input
          className='form-control form-control-sm'
          name='phoneNumber'
          type='text'
          label='Phone number'
          value={formValue.phoneNumber}
          onChange={handleOnChange}
        />
      </div>
      <div className='mb-2'>
        <Input
          className='form-control form-control-sm'
          name='address'
          type='text'
          label='Address'
          value={formValue.address}
          onChange={handleOnChange}
        />
      </div>
      <div className='mb-4'>
        <Input
          className='form-control form-control-sm'
          name='zipCode'
          type='text'
          label='Zip code'
          value={formValue.zipCode}
          onChange={handleOnChange}
        />
      </div>

      {modalFooter}
    </Form>
  );

  return (
    <Modal
      id={id}
      title='Add new person'
      btnSaveName='Save'
      btnSaveType='submit'
      modalBody={modalBody}
    />
  );
};

export default AddEditPerson;
