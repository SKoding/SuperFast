import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import TableData from "../data/TableData";

function Users() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
      },
      {
        header: "Account (Mb/s)",
        accessorKey: "age",
      },
      {
        header: "Address",
        accessorKey: "address",
      },
    ],
    []
  );
  return (
    <div>
      <NavBar />
      <hr />
      <div className="flex flex-row">
        <SideBar />
        <div className="bg-gray-900 w-full">
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
        </div>
      </div>
    </div>
  );
}

export default Users;
