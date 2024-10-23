// src/components/DisplayApiDataTable/Table.jsx
import React from 'react';
import './Table.css';

const Table = ({
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
}) => {
    return (
        <table {...getTableProps()}>
            <caption id="Cap1">ACRIS Data</caption>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps({ className: column.className })}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? ' 🔽'
                                            : ' 🔼'
                                        : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps({ className: cell.column.className })}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;