import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCurrentUser,
  updateUsers,
  updateMyEvents,
  updateIsAuthorized,
  updateIsEventsUpdated,
} from './redux/actions';
import Header from './components/Header';
import NewEvent from './components/NewEvent/NewEvent';
import Table from './components/Table';
import service from './components/services/API_service_decorator';
import Authorize from './components/Authorize';
import DeleteModal from './components/DeleteModal';

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.isAuthorized);
  const eventToAdd = useSelector((state) => state.eventToAdd);
  const eventToDelete = useSelector((state) => state.eventToDelete);
  const isEventsUpdated = useSelector((state) => state.isEventsUpdated);
  const [isUsersUpdated, setIsUsersUpdated] = useState(false);

  const getUsers = async () => {
    const newUsers = await service.get('users');
    dispatch(updateCurrentUser(newUsers[0]));
    dispatch(updateUsers(newUsers));
    setIsUsersUpdated(true);
    dispatch(updateIsAuthorized(false));
  };

  const getEvents = async () => {
    const events = await service.get('events');
    dispatch(updateMyEvents(events));
    dispatch(updateIsEventsUpdated(true));
  };

  useEffect(() => {
    if (!isUsersUpdated) getUsers();
  }, [isUsersUpdated]);

  useEffect(() => {
    if (!isEventsUpdated) getEvents();
  }, [isEventsUpdated]);

  if (!isUsersUpdated) {
    return (
      <div>
        <p>Loading ...</p>
        <span className="loading-ring" />
      </div>
    );
  }
  return (
    <div>
      {!isAuthorized && <Authorize />}
      {eventToDelete && <DeleteModal />}
      {eventToAdd && <NewEvent />}
      <Header />
      <Table />
    </div>
  );
}

export default App;
