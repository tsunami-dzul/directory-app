import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePerson } from '../../services/people.service';
import Button from '../form/Button';
import Modal from '../form/Modal';

const DeletePerson = (props) => {
  const { id, selectedPerson } = props;
  const dispatch = useDispatch();

  const onHandleDelete = () => {
    dispatch(deletePerson(selectedPerson.id));

    document.querySelector('#close-modal-button').click();
  };

  const modalFooter = (
    <div className='modal-footer'>
      <Button
        id='close-modal-button'
        type='button'
        className='btn btn-secondary'
        data-bs-dismiss='modal'
        text='Close'
      />
      <Button
        type='button'
        className='btn btn-dark'
        text='Delete'
        onClick={onHandleDelete}
      />
    </div>
  );

  const modalContent = <>{`Are you sure to delete the record of ${selectedPerson?.name} ${selectedPerson?.lastName}?`}</>;

  return (
    <Modal
      id={id}
      title='Delete person'
      modalBody={modalContent}
      modalFooter={modalFooter}
      btnSaveName='Delete'
    />
  );
};

export default DeletePerson;
