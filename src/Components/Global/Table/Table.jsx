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
  TextField,
  Button,
} from "@mui/material";

const columns = [
  { id: "slNo", label: "SL No.", minWidth: 50 },
  { id: "bonusFrom", label: "Bonus From", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100 },
  { id: "remarks", label: "Remarks", minWidth: 200 },
  { id: "time", label: "Time", minWidth: 100 },
];

function createData(slNo, bonusFrom, amount, remarks, time) {
  return { slNo, bonusFrom, amount, remarks, time };
}

const rows = [];

export default function TableUi() {
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
      <div className="flex flex-col lg:flex-row justify-between items-center mb-5 space-y-4 lg:space-y-0 lg:space-x-4">
        <TextField
          label="Search User"
          variant="outlined"
          size="small"
          className="bg-blue-800 rounded text-white w-full lg:w-auto"
          InputProps={{
            className: "text-white",
          }}
        />
        <TextField
          label="mm/dd/yyyy"
          type="date"
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          className="bg-blue-800 rounded text-white w-full lg:w-auto"
          InputProps={{
            className: "text-white",
          }}
        />
        <Button
          variant="contained"
          className="bg-blue-600 hover:bg-blue-800 text-white w-full lg:w-auto"
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
                    align={column.align}
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.slNo}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className="text-white"
                          >
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
