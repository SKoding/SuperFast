import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import axios from 'axios';
import TableData from '../data/TableData';

function Table() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 6,
  });

  //if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      // const url = new URL(
      //   'https://movie-database-alternative.p.rapidapi.com/',
      //   process.env.NODE_ENV === 'production'
      //     ? 'https://www.material-react-table.com'
      //     : 'http://localhost:3000',
      // );
      // url.searchParams.set(
      //   'start',
      //   `${pagination.pageIndex * pagination.pageSize}`,
      // );
      // url.searchParams.set('size', `${pagination.pageSize}`);
      // url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      // url.searchParams.set('globalFilter', globalFilter ?? '');
      // url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

      try {
        const response = await axios.get(
          "https://movie-database-alternative.p.rapidapi.com/"
        );
        setData(response.data);
        setRowCount(json.meta.totalRowCount);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);
  //console.log(data);
  const columns = useMemo(
    () => [
      {
        "header": "First Name",
        "accessorKey": "firstName"
      },
      {
        "header": "Last Name",
        "accessorKey": "lastName"
      },
      {
        "header": "Account (Mb/s)",
        "accessorKey": "age"
      },
      {
        "header": "Address",
        "accessorKey": "address"
      }
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={TableData}
      enableRowSelection
      getRowId={(row) => row.phoneNumber}
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      // muiToolbarAlertBannerProps={
      //   isError
      //     ? {
      //         color: 'error',
      //         children: 'Error loading data',
      //       }
      //     : undefined
      // }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      state={{
        columnFilters,
        globalFilter,
        // isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isRefetching,
        sorting,
      }}
    />
  );
}

export default Table