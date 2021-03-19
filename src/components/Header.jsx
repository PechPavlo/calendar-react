import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilteredBy, updateIsAuthorized, updateEventToAdd } from '../redux/actions';

const Header = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isAdmin = useSelector((state) => state.currentUser.data.isAdmin);
  const filrteredFromRedux = useSelector((state) => state.filteredByUser);

  const team = [...users.map((user) => user.data.name), 'All'];
  const [filteredByUserHeader, setFilteredByUserHeader] = useState(filrteredFromRedux);
  const handleChange = (event) => {
    setFilteredByUserHeader(event.target.value);
    dispatch(updateFilteredBy(event.target.value));
  };
  useEffect(() => {
    setFilteredByUserHeader(filrteredFromRedux);
  }, [filrteredFromRedux]);
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
            <option className="member" value={member} key={`filter-${member}`}>
              {member === 'All' ? 'All members' : member}
            </option>
          ))}
        </select>
        <button className="change_user-btn" type="button" onClick={() => dispatch(updateIsAuthorized(false))}>Change User</button>
        {isAdmin && <button className="add-event-btn" type="button" onClick={() => dispatch(updateEventToAdd('some'))}>New event +</button>}
      </div>
    </div>
  );
};

export default Header;
