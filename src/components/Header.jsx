import React from 'react';

const Header = () => {
  const team = ['Maria', 'Bob', 'Alex', 'John', 'Boss', 'All'];
  return (
    <div className="main_top-container">
      <h1>Calendar-react</h1>
      <div className="controls">
        <select className="filtered-by" id="filter">
          {team.map((member) => (
            <option className="member" value={member}>
              {member === 'All' ? 'All members' : member}
            </option>
          ))}
        </select>
        <button className="change_user-btn" type="button">Change User</button>
        <button className="add-event-btn" type="button">New event +</button>
      </div>
    </div>
  );
};

export default Header;
