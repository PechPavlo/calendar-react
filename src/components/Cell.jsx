/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Context from './context';

const Cell = (props) => {
  const {
    myEvents, currentUser, setEventToDelete, filteredByUser,
  } = useContext(Context);
  const { dayTime } = props;
  const myEvent = myEvents?.find((elem) => elem.data.dayTime === dayTime);
  const isInFilter = myEvent?.data.participants.includes(filteredByUser);
  const { isAdmin } = currentUser.data;
  if (myEvent && (isInFilter || filteredByUser === 'All')) {
    return (
      <div>
        <div className="calendar_cell booked" data-cell={dayTime}>
          <span className="calendar_cell-name" data-cell_name={dayTime}>
            {myEvent.data.eventName}
          </span>
          {isAdmin && (
          <button
            className="calendar_cell-del_btn"
            data-del_btn={dayTime}
            type="button"
            onClick={() => setEventToDelete(myEvent)}
          >
            &#10006;
          </button>
          )}

        </div>
        <ul className="calendar_cell_participants" data-cell_list={dayTime}>
          {myEvent.data.participants.map((member) => <li className="calendar_cell_participant" key={`${dayTime}-${member}`}>{member}</li>)}
        </ul>
      </div>
    );
  }
  return <div>{ /* empty */ }</div>;
};

export default Cell;
