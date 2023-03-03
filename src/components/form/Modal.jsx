import Button from './Button';

const Modal = (props) => {
  const { id, title, modalBody, modalFooter } = props;

  return (
    <div
      className='modal'
      id={id}
      tabIndex='-1'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title ?? 'No title was provided'}</h5>
            <Button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>{modalBody ?? 'No body was provided'}</div>
          {modalFooter ?? ''}
        </div>
      </div>
    </div>
  );
};

export default Modal;
