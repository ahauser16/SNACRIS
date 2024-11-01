// src/components/DisplayApiDataTable/DisplayApiDataTable.jsx
import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import ResponsePane from './ResponsePane/ResponsePane';
import Table from './Table/Table';
import PaginationPane from './PaginationPane/PaginationPane';
import { columnsRealPropertyPartiesCompact } from './ColumnsConfig/columnsRealPropertyPartiesCompact';
import { columnsRealPropertyPartiesFull } from './ColumnsConfig/columnsRealPropertyPartiesFull';
import { columnsRealPropertyLegalsCompact } from './ColumnsConfig/columnsRealPropertyLegalsCompact';
import { columnsRealPropertyLegalsFull } from './ColumnsConfig/columnsRealPropertyLegalsFull';
import { getColumnsRealPropertyMasterCompact } from './ColumnsConfig/columnsRealPropertyMasterCompact';
import { columnsRealPropertyMasterFull } from './ColumnsConfig/columnsRealPropertyMasterFull';
import { columnsRPMasterPartiesHybrid } from './ColumnsConfig/columnsRPMasterPartiesHybrid';

const DisplayApiDataTable = ({
    data,
    error,
    setData,
    setError,
    fetchFunction,
    formType,
    endpoint,
    responseSchema
}) => {
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [isCompact, setIsCompact] = useState(window.innerWidth < 720);
    const limitOptions = [10, 20, 30, 40, 50];

    useEffect(() => {
        const handleResize = () => {
            setIsCompact(window.innerWidth < 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const columns = React.useMemo(() => {
        switch (formType) {
            case 'SearchByPartyNameForm':
                return isCompact ? columnsRealPropertyPartiesCompact : columnsRealPropertyPartiesFull;
            case 'SearchByAddressForm':
                return isCompact ? columnsRealPropertyLegalsCompact : columnsRealPropertyLegalsFull;
            case 'SearchByDocTypeForm':
                return isCompact ? getColumnsRealPropertyMasterCompact(data.data || []) : columnsRealPropertyMasterFull;
            case 'SearchByTransNumForm':
            case 'SearchByDocIdCrfnForm':
            case 'SearchByReelPageForm':
                return isCompact ? getColumnsRealPropertyMasterCompact(data.data || []) : columnsRealPropertyMasterFull;
            case 'SearchByUccFedLienFileNumForm':
                return isCompact ? getColumnsRealPropertyMasterCompact(data.data || []) : columnsRealPropertyMasterFull;
            case 'SearchByPartyNameHybridForm':
                return columnsRPMasterPartiesHybrid;
            default:
                return isCompact ? getColumnsRealPropertyMasterCompact(data.data || []) : columnsRealPropertyMasterFull;
        }
    }, [formType, isCompact, data]);

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

    const hasData = data.data && data.data.length > 0;

    return (
        <div className="api-table--container">
            {hasData && <ResponsePane data={data} />}
            {hasData && (
                <Table
                    getTableProps={getTableProps}
                    getTableBodyProps={getTableBodyProps}
                    headerGroups={headerGroups}
                    prepareRow={prepareRow}
                    page={page}
                />
            )}
            {hasData && (
                <PaginationPane
                    gotoPage={gotoPage}
                    previousPage={() => {
                        setOffset((prevOffset) => Math.max(0, prevOffset - limit));
                        previousPage();
                    }}
                    nextPage={() => {
                        setOffset((prevOffset) => prevOffset + limit);
                        nextPage();
                    }}
                    pageOptions={pageOptions}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageIndex={pageIndex}
                    limit={limit}
                    setPageSize={(newLimit) => {
                        setLimit(newLimit);
                        setOffset(0); // Reset to first page when page size changes
                    }}
                />
            )}
        </div>
    );
};

export default DisplayApiDataTable;