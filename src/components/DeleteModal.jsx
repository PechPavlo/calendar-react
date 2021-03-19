/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateIsEventsUpdated, updateEventToDelete } from '../redux/actions';
import service from './services/API_service_decorator';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const eventToDelete = useSelector((state) => state.eventToDelete);
  const [isAllOk, setIsAllOk] = useState(false);
  const handleDeleteModal = async (event) => {
    if (event.target.id === 'no_delete' || event.target.id === 'delete-modal') dispatch(updateEventToDelete(null));
    if (event.target.id === 'yes_delete') {
      const result = await service.delete('events', eventToDelete.id);

      if (!result.error) {
        setIsAllOk(true);
        setTimeout(() => {
          dispatch(updateIsEventsUpdated(false));
          dispatch(updateEventToDelete(null));
          setIsAllOk(false);
        }, 3000);
      }
    }
  };
  return (
    <div className="modal_wrapper active" id="delete-modal" onClick={handleDeleteModal}>
      <div className="delete_modal-container">
        {!isAllOk && <span className="delete_modal-title">Are you sure you want to delete</span>}
        {!isAllOk && <span className="delete_modal-subtitle">{`"${eventToDelete.data.eventName}" event?`}</span>}
        {isAllOk && (
        <div className={`add_modal-no-error ${isAllOk && 'booked'}`}>
          <span>The event has succesfuly deleted.</span>
        </div>
        )}

        <div className="delete_modal-footer">
          <button className="no_delete_event-btn" type="button" id="no_delete" onClick={handleDeleteModal}>
            No
          </button>
          <button className="yes_delete_event-btn" type="button" id="yes_delete" onClick={handleDeleteModal}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
