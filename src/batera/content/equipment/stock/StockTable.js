import { useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

const applyFilters = (stockList, filters) => {
  return stockList.filter((schedule) => {
    let matches = true;

    if (filters.status && schedule.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (stockList, page, limit) => {
  return stockList.slice(page * limit, page * limit + limit);
};

const StockTable = ({ stockList }) => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [filters, setFilters] = useState({
    status: null
  });

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredList = applyFilters(stockList, filters);
  const paginatedList = applyPagination(
    filteredList,
    page,
    limit
  );
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title="Stock"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">No.</TableCell>
              <TableCell align="left">Equipment Code</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Equipment</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="left">Status Part</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedList.map((schedule, index) => {
              return (
                <TableRow hover key={schedule.id}>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {index+1}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {schedule.equipmentCode}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {schedule.category}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {schedule.equipment}
                      </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {schedule.department}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {schedule.statusPart}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredList.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

StockTable.propTypes = {
  stockList: PropTypes.array.isRequired
};

StockTable.defaultProps = {
  stockList: []
};

export default StockTable;
