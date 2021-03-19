/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const AddDropdown = (props) => {
  const { users, setMembersList } = props;
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState({});
  const [newMembersList, setNewMembersList] = useState([]);
  const team = users.map((user) => user.data.name);
  //   const team = [...users.map((user) => user.data.name), 'All'];
  const whoIsChecked = isChecked;

  useEffect(() => {
    setIsChecked(whoIsChecked);
    // console.log('whoIsChecked', whoIsChecked);
    team.forEach((member) => { whoIsChecked[member] = false; });
  }, []);

  //   console.log(whoIsChecked, isChecked);

  const handleAddDropdown = () => {
    setIsActive(!isActive);
    setMembersList(newMembersList);
  };
  const handlChange = (event) => {
    // console.log('memberToAdd', event.target.value, event.target.checked);
    whoIsChecked[event.target.value] = event.target.checked;
    setIsChecked(whoIsChecked);
    const membersList = team.filter((member) => whoIsChecked[member]);
    setNewMembersList(membersList);
  };
  return (
    <div className={`add_dropdown ${isActive && 'active'}`} data-drop="down">
      <div className="add_dropdown-main" data-drop="down" onClick={handleAddDropdown}>
        <span className="add_dropdown-selected" data-drop="down">
          {newMembersList.length ? newMembersList.join(', ') : 'chose participants'}
        </span>
        <select
          className="add_dropdown-fake_select"
          data-drop="down"
        />
      </div>
      <div className="add_dropdown-content" data-drop="down">
        {team.map((member) => (
          <label className="member" data-drop="down">
            {member === 'All' ? 'All members' : member}
            <input
              className="member-selected-to-add"
              type="checkbox"
              value={member}
              data-drop="down"
              checked={newMembersList.includes(member)}
              onChange={handlChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddDropdown;
