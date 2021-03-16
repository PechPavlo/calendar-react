/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import '../../assets/style/NewEvent.scss';
import service from '../services/API_service_decorator';
import MyEvent from '../MyEvent';
import AddDropdown from '../AddDropdown';

const NewEvent = (props) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  const {
    users, setEventToAdd, setIsEventsUpdated, myEvents,
  } = props;
  const [isFree, setIsFree] = useState(true);
  const [isAllOk, setIsAllOk] = useState(false);
  const [newDay, setNewDay] = useState(days[0]);
  const [newTime, setNewTime] = useState(times[0]);
  const [newName, setNewName] = useState('');
  const [membersList, setMembersList] = useState([]);
  const handleAddEvent = async (event) => {
    event.preventDefault();
    if (event.target.id === 'cancel_add' || event.target.id === 'add-modal') setEventToAdd(null);
    if (myEvents.find((myEvent) => myEvent.data.dayTime === `${newDay}${newTime}`)) {
      setIsFree(false);
    } else {
      const result = await service.create('events', new MyEvent(newDay, newTime, newName, membersList));

      if (!result.error) {
        setIsAllOk(true);
        setTimeout(() => {
          setEventToAdd(null);
          setIsEventsUpdated(false);
          setIsAllOk(false);
        }, 3000);
      }
    }
  };
  return (
    <div className="modal_wrapper active" id="add-modal">
      <div className="add_modal-container">
        <div className={`add_modal-error ${!isFree && 'booked'}`}>
          <span>Failed to create an event. Time slot is already booked.</span>
          <button id="add_modal-error_btn" onClick={() => setIsFree(true)} />
        </div>
        <div className={`add_modal-no-error ${isAllOk && 'booked'}`}>
          <span>The new event has succesfuly created.</span>
        </div>
        <form id="add-form" onSubmit={handleAddEvent}>
          <label className="add_lable">
            Name of the event:
            <input
              className="add_form-name"
              id="new_event-name"
              placeholder="Event name"
              type="text"
              required
              minLength="1"
              maxLength="25"
              onChange={(ev) => setNewName(ev.target.value)}
            />
          </label>
          <label className="add_lable" htmlFor="add_select">
            Participants:
            <AddDropdown
              users={users}
              setMembersList={setMembersList}
            />
            <input
              id="add_select"
              form="add-form"
              required
              data-drop="down"
              value={membersList.length ? membersList.join(', ') : ''}
            />
          </label>
          <label className="add_lable">
            Day:
            <select className="add_day" defaultValue={newDay} onChange={(ev) => setNewDay(ev.target.value)}>
              {days.map((day) => (
                <option className="day" value={day} key={`new-day-${day}`}>
                  {day}
                </option>
              ))}
            </select>
          </label>
          <label className="add_lable">
            Time:
            <select className="add_time" defaultValue={newTime} onChange={(ev) => setNewTime(ev.target.value)}>
              {times.map((time) => (
                <option className="time" value={time} key={`new-time-${time}`}>
                  {`${time}:00`}
                </option>
              ))}
            </select>
          </label>
        </form>
        <div className="add_modal-footer">
          <button className="cancel_add_event-btn" id="cancel_add" onClick={handleAddEvent}>
            Cancel
          </button>
          <button className="create_add_event-btn" id="create_add" form="add-form" type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
