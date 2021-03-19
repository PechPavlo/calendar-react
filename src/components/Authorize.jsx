import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentUser, updateIsAuthorized } from '../redux/actions';

const Authorize = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser);
  const [userToAuthorize, setUserToAuthorize] = useState(currentUser.data.name);

  const setAuthorizedUser = (userToSet) => {
    dispatch(updateIsAuthorized(true));
    dispatch(updateCurrentUser(users.find((user) => user.data.name === userToSet)));
  };

  useEffect(() => {
    setUserToAuthorize(currentUser.data.name);
  }, [currentUser]);
  const handleChange = (event) => {
    setUserToAuthorize(event.target.value);
  };
  return (
    <div className="modal_wrapper active" id="authorize-modal">
      <div className="authorize_modal-container">
        <span className="authorize_modal-title">Please authorize</span>
        <select
          className="autorized-by"
          value={userToAuthorize}
          onChange={handleChange}
        >
          {users?.map((user) => (
            <option
              className="user"
              value={user.data.name}
              key={user.id}
            >
              {user.data.name}
            </option>
          ))}
        </select>
        <div className="authorize_modal-footer">
          <button
            className="confirm_authorize_modal-btn"
            id="confirm_user"
            type="button"
            onClick={() => setAuthorizedUser(userToAuthorize)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default Authorize;
