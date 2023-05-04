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

const applyFilters = (scheduledJobList, filters) => {
  return scheduledJobList.filter((schedule) => {
    let matches = true;

    if (filters.status && schedule.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (scheduledJobList, page, limit) => {
  return scheduledJobList.slice(page * limit, page * limit + limit);
};

const ScheduledJobTable = ({ scheduledJobList, handleOpen }) => {
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

  const filteredUserList = applyFilters(scheduledJobList, filters);
  const paginatedUserList = applyPagination(
    filteredUserList,
    page,
    limit
  );
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title="Scheduled Job"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">No.</TableCell>
              <TableCell align="left">Job Name</TableCell>
              <TableCell align="left">Component Code</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="left">System</TableCell>
              <TableCell align="left">Component</TableCell>
              <TableCell align="left">Part</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUserList.map((schedule, index) => {
              return (
                <TableRow hover key={schedule.id}  onClick={() => handleOpen(schedule)}>
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
                      style={{textDecoration: 'underline'}}
                    >
                      {schedule.jobName}
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
                      {schedule.componentCode}
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredUserList.length}
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

ScheduledJobTable.propTypes = {
  scheduledJobList: PropTypes.array.isRequired
};

ScheduledJobTable.defaultProps = {
  scheduledJobList: []
};

export default ScheduledJobTable;
