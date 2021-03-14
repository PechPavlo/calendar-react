/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const {
    users, changeUser, filteredByUser, changeFilteredByUser, newEvent,
  } = props;
  const team = [...users.map((user) => user.data.name), 'All'];
  const [filteredByUserHeader, setFilteredByUserHeader] = useState(filteredByUser);
  const handleChange = (event) => {
    setFilteredByUserHeader(event.target.value);
    changeFilteredByUser(event.target.value);
  };
  useEffect(() => {
    setFilteredByUserHeader(filteredByUser);
  }, [filteredByUser]);
  return (
    <div className="main_top-container">
      <h1>Calendar-react</h1>
      <div className="controls">
        <select
          className="filtered-by"
          id="filter"
          value={filteredByUserHeader}
          onChange={handleChange}
        >
          {team.map((member) => (
            <option className="member" value={member}>
              {member === 'All' ? 'All members' : member}
            </option>
          ))}
        </select>
        <button className="change_user-btn" type="button" onClick={() => changeUser()}>Change User</button>
        <button className="add-event-btn" type="button" onClick={() => newEvent()}>New event +</button>
      </div>
    </div>
  );
};

export default Header;
