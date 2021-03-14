import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import NewEvent from './components/NewEvent/NewEvent';
import Table from './components/Table';
import service from './components/services/API_service_decorator';
import Authorize from './components/Authorize';

function App() {
  const initUsers = [{ id: 'a6a136dc-fd2b-4073-a1ae-214589cc73e6', data: { isAdmin: true, name: 'test', password: '' } }];
  const [usersData, setUsers] = useState([...initUsers]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState(initUsers[0]);

  const getUsers = async () => {
    setUsers(await service.get('users'));
    console.log(usersData);
    setIsLoading(false);
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

  useEffect(() => {
    if (isLoading) getUsers();
    console.log('Вы', usersData, isLoading);
  });

  const setAuthorizedUser = (user) => {
    setIsAuthorized(true);
    // setCurrentUser(user);
    console.log(user);
  };

  if (isLoading) {
    return <span className="loading-ring" />;
  }
  return (
    <div className="App">
      {!isAuthorized && (
        <Authorize
          users={usersData}
          currentUser={currentUser}
          setAuthorizedUser={setAuthorizedUser}
        />
      )}
      <Header />
      <Table />
      {/* {isLoading && <span className="loading-ring" />} */}
      {/* <NewEvent /> */}
    </div>
  );
}

export default App;
