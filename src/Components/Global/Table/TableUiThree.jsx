import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "sl", label: "SL", minWidth: 50 },
  { id: "plan", label: "Plan", minWidth: 150 },
  { id: "returnInterest", label: "Return Interest", minWidth: 150 },
  { id: "receivedAmount", label: "Received Amount", minWidth: 150 },
  { id: "upcomingPayment", label: "Upcoming Payment", minWidth: 150 },
];

function createData(sl, plan, returnInterest, receivedAmount, upcomingPayment) {
  return { sl, plan, returnInterest, receivedAmount, upcomingPayment };
}

const rows = [];

export default function TableUIThree() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="p-5 bg-blue-900 rounded-lg text-white w-full  mx-auto">
      <Paper className="w-full overflow-hidden bg-blue-800 text-white">
        <TableContainer className="overflow-x-auto">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                    className="bg-gray-800 text-white"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 ? (
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.sl}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} className="text-white">
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    align="center"
                    className="text-white"
                  >
                    No Data Found!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="text-white"
        />
      </Paper>
    </div>
  );
}
