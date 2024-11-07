
import React, { useState } from 'react';

const TableRow = ({ row, updateRowValue }) => {
    const [inputValue, setInputValue] = useState('');
    const [variance, setVariance] = useState(0);

    const handleAllocationPer = () => {
        const percentage = parseFloat(inputValue);
        const newValue = row.value + (row.value * (percentage / 100));
        const variancePercent = ((newValue - row.value) / row.value) * 100;
        updateRowValue(row.id, newValue);
        setVariance(variancePercent);
        setInputValue('');
    };

    const handleAllocationVal = () => {
        const newValue = parseFloat(inputValue);
        const variancePercent = ((newValue - row.value) / row.value) * 100;
        updateRowValue(row.id, newValue);
        setVariance(variancePercent);
        setInputValue('');

    };

    return (
        <>
            <tr>
                <td>{row.label}</td>
                <td>{row.value.toFixed(2)}</td>
                <td>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </td>
                <td>
                    <button onClick={handleAllocationPer}>Allocation %</button>
                </td>
                <td>
                    <button onClick={handleAllocationVal}>Allocation Val</button>
                </td>
                <td>{variance.toFixed(2)}%</td>
            </tr>
            {row.children && row.children.map(child => (
                <TableRow key={child.id} row={child} updateRowValue={updateRowValue} />
            ))}
        </>
    );
};

export default TableRow;





