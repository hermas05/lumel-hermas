import React, { useState } from 'react';
import TableRow from './TableRow';

const Table = ({ data }) => {
  const [rows, setRows] = useState(data);

  const updateRowValue = (id, newValue) => {
    const updateRows = (rows) =>
      rows.map(row => {
        if (row.id === id) {
          return { ...row, value: newValue };
        } else if (row.children) {
          return { ...row, children: updateRows(row.children) };
        }
        return row;
      });
    setRows(updateRows(rows));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Input</th>
          <th>Allocation %</th>
          <th>Allocation Val</th>
          <th>Variance %</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <TableRow key={row.id} row={row} updateRowValue={updateRowValue} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
