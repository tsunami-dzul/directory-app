import React, { useEffect, useMemo, useState } from 'react';
import Input from '../form/Input';
import Modal from '../form/Modal';
import Form from '../form/Form';
import Button from '../form/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updatePerson } from '../../services/people.service';

const AddEditPerson = (props) => {
  const { id, selectedPerson } = props;
  const dispatch = useDispatch();
  const [saveAction, setSaveAction] = useState(false);
  const { loading, error } = useSelector((state) => state);
  const initialFormState = useMemo(() => {
    return {
      name: '',
      lastName: '',
      address: '',
      email: '',
      phoneNumber: '',
      zipCode: '',
    };
  }, []);
  const [formValue, setFormValue] = useState(initialFormState);

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
      setFormValue(initialFormState);
    };
  }, [selectedPerson, initialFormState]);

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

    setSaveAction(true);

    dispatch(updatePerson(selectedPerson.id, formValue));

    document.getElementById('closeModalButton').click();
  };

  const modalFooter = (
    <div className='modal-footer'>
      <Button
        id='closeModalButton'
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

  const modalBodyLoading = (
    <div className='col-md-2 mx-auto'>
      <div
        className='spinner-border'
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );

  const modalBodyError = (
    <div
      className='alert alert-danger'
      role='alert'
    >
      Sorry, something went wrong, please contact the administrator.
    </div>
  );

  return (
    <Modal
      id={id}
      title='Add new person'
      btnSaveName='Save'
      btnSaveType='submit'
      modalBody={loading && saveAction ? modalBodyLoading : error ? modalBodyError : modalBody}
    />
  );
};

export default AddEditPerson;
