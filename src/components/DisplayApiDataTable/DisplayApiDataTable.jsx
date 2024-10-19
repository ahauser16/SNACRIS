// src/components/DisplayApiDataTable/DisplayApiDataTable.jsx
import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import './DisplayApiDataTable.css';

const DisplayApiDataTable = ({ data, error, setData, setError, fetchFunction }) => {
    const [offset, setOffset] = useState(0);
    const limit = 10;

    const handleNext = async () => {
        const newOffset = offset + limit;
        setOffset(newOffset);
        try {
            const response = await fetchFunction({ limit, offset: newOffset });
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData({ data: [] });
        }
    };

    const handlePrev = async () => {
        const newOffset = Math.max(offset - limit, 0);
        setOffset(newOffset);
        try {
            const response = await fetchFunction({ limit, offset: newOffset });
            setData(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData({ data: [] });
        }
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Document ID',
                accessor: 'document_id',
                Cell: ({ value }) => <a href={`https://example.com/document/${value}`}>{value}</a>,
            },
            { Header: 'Record Type', accessor: 'record_type' },
            { Header: 'Party Type', accessor: 'party_type' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Address 1', accessor: 'address_1' },
            { Header: 'Country', accessor: 'country' },
            { Header: 'City', accessor: 'city' },
            { Header: 'State', accessor: 'state' },
            { Header: 'Zip', accessor: 'zip' },
            {
                Header: 'Good Through Date',
                accessor: 'good_through_date',
                Cell: ({ value }) => new Date(value).toLocaleDateString(),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state: { pageIndex },
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable(
        {
            columns,
            data: data.data || [],
            initialState: { pageIndex: 0 },
            manualPagination: true,
            pageCount: Math.ceil((data.totalRecords || 0) / limit),
        },
        useFilters,
        useSortBy,
        usePagination
    );

    if (error) {
        return <p>No data available</p>;
    }

    return (
        <div className="api-table--container">
            <h2>Results</h2>
            <div className="api-response-details--container">
                <h3>Response Details</h3>
                <ul>
                    <li className="api-response-detail">Total Records: {data.totalRecords}</li>
                    <li className="api-response-detail">Displayed Records: {data.data.length}</li>
                    <li className="api-response-detail">API Call Status: Success</li>
                    <li className="api-response-detail">Timestamp: {new Date().toLocaleString()}</li>
                </ul>
            </div>
            <div className="api-table-form--container">
                <fieldset>
                    <legend>Table Controls</legend>
                    <div className="form-row form-row--variable">
                        <div className="form-group">
                            <button
                                type="button"
                                onClick={handlePrev}
                                disabled={!canPreviousPage}
                                className="form-button infoBtn"
                            >
                                Prev
                            </button>
                        </div>
                        <div className="form-group">
                            <button
                                type="button"
                                className="form-button infoBtn"
                                onClick={handleNext}
                                disabled={!canNextPage}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
            <table {...getTableProps()} className="api-table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={limit}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DisplayApiDataTable;