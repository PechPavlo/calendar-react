import React from 'react';

const Cell = () => (
  <div>
    <div className="calendar_cell" data-cell="Monday10">
      <span className="calendar_cell-name" data-cell_name="Monday10">
        John, Alex
      </span>
      <button
        className="calendar_cell-del_btn"
        data-del_btn="Monday10"
        type="button"
      >
        &#10006;
      </button>

    </div>
    <ul className="calendar_cell_participants" data-cell_list="Monday10">
      <li className="calendar_cell_participant">Bob</li>
      <li className="calendar_cell_participant">Alex</li>
    </ul>
  </div>
);

export default Cell;
