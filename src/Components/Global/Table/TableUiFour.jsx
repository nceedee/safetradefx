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
  Button,
  TextField,
} from "@mui/material";

const columns = [
  { id: "sl", label: "SL No.", minWidth: 50 },
  { id: "transactionId", label: "Transaction ID", minWidth: 150 },
  { id: "amount", label: "Amount", minWidth: 100 },
  { id: "remarks", label: "Remarks", minWidth: 200 },
  { id: "time", label: "Time", minWidth: 150 },
];

function createData(sl, transactionId, amount, remarks, time) {
  return { sl, transactionId, amount, remarks, time };
}

const rows = [
  createData(
    1,
    "3HU78VSPTPXX",
    "+2 USD",
    "You got $2 joining bonus.",
    "30 Jul 2024 11:32 PM"
  ),
];

export default function TableUIFour() {
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
    <div className="p-5 bg-blue-900 rounded-lg text-white w-full lg:w-4/5 mx-auto">
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between mb-4 space-y-2 lg:space-y-0 lg:space-x-2">
        <TextField
          variant="outlined"
          placeholder="Search for Transaction ID"
          className="bg-blue-800 text-white flex-1"
          InputProps={{
            className: "text-white",
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Remark"
          className="bg-blue-800 text-white flex-1"
          InputProps={{
            className: "text-white",
          }}
        />
        <TextField
          variant="outlined"
          type="date"
          className="bg-blue-800 text-white flex-1"
          InputProps={{
            className: "text-white",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className="flex-1 lg:flex-none"
        >
          Search
        </Button>
      </div>
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
                            {column.id === "amount" ? (
                              <span className="text-green-500">{value}</span>
                            ) : (
                              value
                            )}
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
