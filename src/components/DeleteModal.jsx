/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import Context from './context';
import service from './services/API_service_decorator';

const DeleteModal = (props) => {
  const { eventToDelete, setIsEventsUpdated } = props;
  const [myEvents, currentUser, setEventToDelete] = useContext(Context);
  //   const [userToAuthorize, setUserToAuthorize] = useState(currentUser.data.name);
  //   useEffect(() => {
  //     setUserToAuthorize(currentUser.data.name);
  //     // console.log('auth0', currentUser, userToAuthorize);
  //   }, [currentUser]);
  const handleDeleteModal = async (event) => {
    if (event.target.id === 'no_delete' || event.target.id === 'delete-modal') setEventToDelete(null);
    if (event.target.id === 'yes_delete') {
      await service.delete('events', eventToDelete.id);
      setIsEventsUpdated(false);
      setEventToDelete(null);
    }
    console.log('eventToDelete', event.target.id, eventToDelete);
  };
  return (
    <div className="modal_wrapper active" id="delete-modal" onClick={handleDeleteModal}>
      <div className="delete_modal-container">
        <span className="delete_modal-title">Are you sure you want to delete</span>
        <span className="delete_modal-subtitle">{`"${eventToDelete.data.eventName}" event?`}</span>
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
