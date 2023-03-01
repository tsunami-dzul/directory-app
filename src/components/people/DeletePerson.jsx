import React from 'react';
import Modal from '../form/Modal';

const DeletePerson = (props) => {
  const { id, person } = props;

  return (
    <Modal 
        id={id} 
        title='Delete person' 
        modalBody={<>{`Are you sure to delete person ${person?.name}?`}</>}
        btnSaveName = 'Delete'
    />
  );
};

export default DeletePerson;
