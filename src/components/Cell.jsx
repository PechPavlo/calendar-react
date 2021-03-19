/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEventToDelete } from '../redux/actions';

const Cell = (props) => {
  const dispatch = useDispatch();
  const filteredByUser = useSelector((state) => state.filteredByUser);
  const currentUser = useSelector((state) => state.currentUser);
  const myEvents = useSelector((state) => state.myEvents);

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
            onClick={() => dispatch(updateEventToDelete(myEvent))}
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
