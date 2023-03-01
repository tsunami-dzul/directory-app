import Button from './Button';

const Modal = (props) => {
  const { id, title, modalBody, modalFooter, btnCloseName, btnSaveName, btnSaveType } = props;

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
          {modalFooter ? (
            <div className='modal-footer'>
              <Button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                text={btnCloseName ?? 'Close'}
              />
              <Button
                type={btnSaveType ?? 'button'}
                className='btn btn-dark'
                text={btnSaveName ?? 'Save'}
              />
            </div>
          ): ''}
        </div>
      </div>
    </div>
  );
};

export default Modal;
