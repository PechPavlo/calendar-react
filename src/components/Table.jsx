import React from 'react';
import Cell from './Cell';

const Table = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = [10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <table className="calendar">
      <thead>
        <tr className="calendar-header">
          {['Name', ...days].map((day) => (
            <th className="calendar_header-item" key={`thead-${day}`}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {times.map((time) => (
          <tr className="calendar-row" key={`tbody-tr-${time}`}>
            {['Name', ...days].map((day) => (day === 'Name' ? (
              <td className="calendar_row-item" key={`tbody-${time}`}>{`${time}:00`}</td>
            ) : (
              <td
                className="calendar_row-item"
                draggable="true"
                data-time={`${day}${time}`}
                key={`tbody-${day}${time}`}
              >
                <Cell
                  dayTime={`${day}${time}`}
                />
              </td>
            )))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
