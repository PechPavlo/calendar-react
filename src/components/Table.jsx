import React from 'react';
import Cell from './Cell';

const Table = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = [10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <table className="calendar">
      <tr className="calendar-header">
        {['Name', ...days].map((day) => (
          <th className="calendar_header-item">{day}</th>
        ))}
      </tr>
      {times.map((time) => (
        <tr className="calendar-row">
          {['Name', ...days].map((day) => (day === 'Name' ? (
            <td className="calendar_row-item">{`${time}:00`}</td>
          ) : (
            <td
              className="calendar_row-item"
              draggable="true"
              data-time={`${day}${time}`}
            >
              <Cell />
            </td>
          )))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
