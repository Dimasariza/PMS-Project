import { useEffect, useState } from 'react';
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
  CardHeader,
  Skeleton
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

const CustomTable = ({ table_name, headerNames, values,  handleOpen, handleChangingPage, handleChangingLimit, defaultPageLimit=[0, 5] }) => {
  const [page, setPage] = useState(defaultPageLimit[0]);
  const [limit, setLimit] = useState(defaultPageLimit[1]);
  const [filters, setFilters] = useState({
    status: null
  });

  useEffect(() =>{
    if(handleChangingPage != null) handleChangingPage(page);
  }, [page])

  useEffect(() =>{
    if(handleChangingLimit != null) handleChangingLimit(limit);
  }, [limit])

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUserList = applyFilters(values, filters);
  const paginatedUserList = applyPagination(
    filteredUserList,
    page,
    limit
  );
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={table_name}
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">No.</TableCell>
              {
                headerNames.map((header) =>{
                  return(
                    <TableCell align="left">{header[0]}</TableCell>
                  );
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUserList.map((schedule, index) => {
              let rowIndex = index+1 + ((page) * limit);
              return (
                <TableRow hover key={rowIndex}  onClick={() => handleOpen(schedule, rowIndex)}>
                  <TableCell align="left">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {rowIndex}
                    </Typography>
                  </TableCell>
                  {
                    headerNames.map((value) => {
                      let key = value[1]
                      if(schedule[key] == null){
                        return (
                          <TableCell align="left">
                            <Skeleton />
                          </TableCell>
                        );
                      }else{
                        return (
                          <TableCell align="left">
                            <Typography
                              variant="body1"
                              fontWeight="bold"
                              color="text.primary"
                              gutterBottom
                              noWrap
                            >
                              {schedule[key]}
                            </Typography>
                          </TableCell>
                        );
                      }
                      
                    })
                  }
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

CustomTable.propTypes = {
  scheduledJobList: PropTypes.array.isRequired
};

CustomTable.defaultProps = {
  scheduledJobList: []
};

export default CustomTable;
