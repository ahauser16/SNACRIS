// src/components/DisplayApiDataTable/DisplayApiDataTable.jsx
import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import ResponsePane from './ResponsePane/ResponsePane';
import PaginationPane from './PaginationPane/PaginationPane';
import { columnsRealPropertyPartiesCompact, columnsRealPropertyPartiesFull, columnsRealPropertyLegals, columnsRealPropertyMaster, columnsPersonalPropertyMaster } from './ColumnsConfig/ColumnsConfig';
import './DisplayApiDataTable.css';

const DisplayApiDataTable = ({ data, error, setData, setError, fetchFunction, formType, endpoint, responseSchema }) => {
    const [offset, setOffset] = useState(0);
    const [isCompact, setIsCompact] = useState(window.innerWidth < 720);
    const limit = 10;

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth < 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const columns = React.useMemo(() => {
        switch (formType) {
            case 'SearchByPartyNameForm':
                return isCompact ? columnsRealPropertyPartiesCompact : columnsRealPropertyPartiesFull;
            case 'SearchByAddressForm':
                return columnsRealPropertyLegals;
            case 'SearchByDocTypeForm':
            case 'SearchByTransNumForm':
            case 'SearchByDocIdCrfnForm':
            case 'SearchByReelPageForm':
                return columnsRealPropertyMaster;
            case 'SearchByUccFedLienFileNumForm':
                return columnsPersonalPropertyMaster;
            default:
                return columnsRealPropertyMaster; // Default to columnsRealPropertyMaster if formType is not recognized
        }
    }, [formType, isCompact]);

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
            <ResponsePane data={data} />
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
            <PaginationPane
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                pageOptions={pageOptions}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageIndex={pageIndex}
                limit={limit}
                setPageSize={setPageSize}
            />
        </div>
    );
};

export default DisplayApiDataTable;