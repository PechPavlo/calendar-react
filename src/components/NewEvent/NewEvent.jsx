/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../../assets/style/NewEvent.scss';

const NewEvent = () => (
  <div className="modal_wrapper active" id="add-modal">
    <div className="add_modal-container">
      <div className="add_modal-error">
        <span>Failed to create an event. Time slot is already booked.</span>
        <button id="add_modal-error_btn" />
      </div>
      <form id="add-form">
        <label className="add_lable" htmlFor="#new_event-name">
          Name of the event:
          <input
            className="add_form-name"
            id="new_event-name"
            placeholder="Event name"
            required=""
            maxLength="25"
          />
        </label>
        <label className="add_lable" htmlFor="add_select">
          Participants:
          <div className="add_dropdown" data-drop="down">
            <div className="add_dropdown-main" data-drop="down">
              <span className="add_dropdown-selected" data-drop="down">
                chose participants
              </span>
              <select
                className="add_dropdown-fake_select"
                data-drop="down"
              />
            </div>
            <div className="add_dropdown-content" data-drop="down">
              <label className="member" data-drop="down">
                Maria
                <input
                  className="member-selected-to-add"
                  type="checkbox"
                  value="Maria"
                  data-drop="down"
                />
              </label>
              <label className="member" data-drop="down">
                Bob
                <input
                  className="member-selected-to-add"
                  type="checkbox"
                  value="Bob"
                  data-drop="down"
                />
              </label>
              <label className="member" data-drop="down">
                Alex
                <input
                  className="member-selected-to-add"
                  type="checkbox"
                  value="Alex"
                  data-drop="down"
                />
              </label>
              <label className="member" data-drop="down">
                Boss
                <input
                  className="member-selected-to-add"
                  type="checkbox"
                  value="Boss"
                  data-drop="down"
                />
              </label>
              <label className="member" data-drop="down">
                All members
                <input
                  className="member-selected-to-add"
                  type="checkbox"
                  value="All"
                  data-drop="down"
                />
              </label>
            </div>
          </div>
          <input
            id="add_select"
            form="add-form"
            required=""
            data-drop="down"
          />
        </label>
        <label className="add_lable">
          Day:
          <select className="add_day">
            <option className="day" selected="" value="Monday">
              Monday
            </option>
            <option className="day" value="Tuesday">
              Tuesday
            </option>
            <option className="day" value="Wednesday">
              Wednesday
            </option>
            <option className="day" value="Thursday">
              Thursday
            </option>
            <option className="day" value="Friday">
              Friday
            </option>
          </select>
        </label>
        <label className="add_lable">
          Time:
          <select className="add_time">
            <option className="time" selected="" value="10">
              10:00
            </option>
            <option className="time" value="11">
              11:00
            </option>
            <option className="time" value="12">
              12:00
            </option>
            <option className="time" value="13">
              13:00
            </option>
            <option className="time" value="14">
              14:00
            </option>
            <option className="time" value="15">
              15:00
            </option>
            <option className="time" value="16">
              16:00
            </option>
            <option className="time" value="17">
              17:00
            </option>
            <option className="time" value="18">
              18:00
            </option>
          </select>
        </label>
      </form>
      <div className="add_modal-footer">
        <button className="cancel_add_event-btn" id="cancel_add">
          Cancel
        </button>
        <button className="create_add_event-btn" id="create_add" form="add-form">
          Create
        </button>
      </div>
    </div>
  </div>
);

export default NewEvent;
