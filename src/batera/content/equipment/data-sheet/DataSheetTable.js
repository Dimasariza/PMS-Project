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

const applyFilters = (dataSheetList, filters) => {
  return dataSheetList.filter((schedule) => {
    let matches = true;

    if (filters.status && schedule.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (dataSheetList, page, limit) => {
  return dataSheetList.slice(page * limit, page * limit + limit);
};

const DataSheetTable = ({ dataSheetList }) => {
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

  const filteredList = applyFilters(dataSheetList, filters);
  const paginatedList = applyPagination(
    filteredList,
    page,
    limit
  );
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title="Data Sheet"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">No.</TableCell>
              <TableCell align="left">Data Sheet Code</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="left">System</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">Component</TableCell>
              <TableCell align="left">Part</TableCell>
              <TableCell align="left">Maintenance</TableCell>
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
                      {schedule.dataSheetCode}
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
                      {schedule.system}
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
                        {schedule.brand}
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
                      {schedule.component}
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
                      {schedule.part}
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
                      {schedule.maintenance}
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

DataSheetTable.propTypes = {
  dataSheetList: PropTypes.array.isRequired
};

DataSheetTable.defaultProps = {
  dataSheetList: []
};

export default DataSheetTable;
