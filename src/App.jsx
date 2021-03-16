import React, { useState, useEffect } from 'react';
import Context from './components/context';
import Header from './components/Header';
import NewEvent from './components/NewEvent/NewEvent';
import Table from './components/Table';
import service from './components/services/API_service_decorator';
import Authorize from './components/Authorize';
import DeleteModal from './components/DeleteModal';

function App() {
  const initUsers = [{ id: 'a6a136dc-fd2b-4073-a1ae-214589cc73e6', data: { isAdmin: true, name: 'test', password: '' } }];
  const [usersData, setUsers] = useState([...initUsers]);
  const [myEvents, setMyEvents] = useState([]);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [eventToAdd, setEventToAdd] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [isEventsUpdated, setIsEventsUpdated] = useState(false);
  const [isUsersUpdated, setIsUsersUpdated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [currentUser, setCurrentUser] = useState(initUsers[0]);
  const [filteredByUser, setFilteredByUser] = useState('All');

  const getUsers = async () => {
    const users = await service.get('users');
    setCurrentUser(users[0]);
    setUsers(users);
    // setIsLoading(false);
    setIsUsersUpdated(true);
    setIsAuthorized(false);
    // console.log('after', usersData, currentUser, mEevents);
    // if (users === null) {
    //   props.team.map((member) => ServiceAPI.create('users', new User(member, '')));
    //   setTimeout(ServiceAPI.create('users', new Admin('Boss', 'superPassword')), 500);
    //   setTimeout(loadData, 1000);
    // }
    // if (users) props.users = users;
    // init(props);
    // main();
    // props.users?.map((user) => deleteEntity('users', user.id)); // to delete all users!!!
  };

  const getEvents = async () => {
    const events = await service.get('events');
    setMyEvents(events);
    // setIsLoading(false);
    setIsEventsUpdated(true);
  };

  useEffect(() => {
    if (!isUsersUpdated) getUsers();
    // console.log('isUsersUpdated', usersData, isUsersUpdated, currentUser, myEvents);
  }, [isUsersUpdated]);

  useEffect(() => {
    if (!isEventsUpdated) getEvents();
    // console.log('isEventsUpdated', usersData, isEventsUpdated, currentUser, myEvents);
  }, [isEventsUpdated]);

  const setAuthorizedUser = (userToSet) => {
    setIsAuthorized(true);
    setCurrentUser(usersData.find((user) => user.data.name === userToSet));
    // console.log(userToSet, currentUser);
  };

  const handleChangeUser = () => {
    setIsAuthorized(false);
  };

  const handlerNewEvent = () => {
    setEventToAdd('some');
    console.log('New Event');
  };

  const handlerFilteredByUser = (userToFilter) => {
    setFilteredByUser(userToFilter);
  };

  if (!isUsersUpdated) {
    return (
      <div>
        <p>Loading ...</p>
        <span className="loading-ring" />
      </div>
    );
  }
  return (
    <Context.Provider value={{
      myEvents, currentUser, setEventToDelete, filteredByUser,
    }}
    >
      {/* <div className="App"> */}
      {!isAuthorized && (
        <Authorize
          users={usersData}
          currentUser={currentUser}
          setAuthorizedUser={setAuthorizedUser}
        />
      )}
      { eventToDelete && (
      <DeleteModal
        eventToDelete={eventToDelete}
        setIsEventsUpdated={setIsEventsUpdated}
      />
      )}
      {eventToAdd && (
        <NewEvent
          users={usersData}
          setEventToAdd={setEventToAdd}
          setIsEventsUpdated={setIsEventsUpdated}
          myEvents={myEvents}
        />
      )}
      <Header
        isAdmin={currentUser.data.isAdmin}
        users={usersData}
        changeUser={handleChangeUser}
        changeFilteredByUser={handlerFilteredByUser}
        newEvent={handlerNewEvent}
        filteredByUser={filteredByUser}
      />
      <Table />
      {/* {isLoading && <span className="loading-ring" />} */}
      {/* </div> */}
    </Context.Provider>
  );
}

export default App;
