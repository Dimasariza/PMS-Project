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
  CardHeader,
  Skeleton
} from '@mui/material';

import Label from 'src/components/Label';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const getStatusLabel = (cryptoOrderStatus) => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color } = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (summaryList, filters) => {
  // Check if summaryList is empty
  // console.log(summaryList.length)
  if (summaryList.length === 0) {
    return [];
  }
  return summaryList.filter((summary) => {
    let matches = true;

    if (filters.status && summary.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (summaryList, page, limit) => {
  return summaryList.slice(page * limit, page * limit + limit);
};

const SummaryTable = ({ summaryList, loading = false }) => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [filters, setFilters] = useState({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e) => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handlePageChange = (_event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredSummaryList = applyFilters(summaryList, filters);
  const paginatedSummaryList = applyPagination(
    filteredSummaryList,
    page,
    limit
  );
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <Box width={150}>
          </Box>
        }
        title="Summary"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Job Status</TableCell>
              <TableCell>Machine</TableCell>
              <TableCell>Deck</TableCell>
              <TableCell>Electrical</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSummaryList.map((summary, index) => {
              return (
                <TableRow hover key={summary.id+"|"+ summary.deck+"|"+summary.machine+"|"+summary.electrical}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {index + 1}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {summary.jobStatus}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {
                      loading ? <Skeleton sx={{width: '30%'}}/> :
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {summary.machine}
                      </Typography>
                    }
                  </TableCell>
                  <TableCell>
                    {
                      loading ? <Skeleton sx={{width: '30%'}}/> :
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {summary.deck}
                      </Typography>
                    }
                  </TableCell>
                  <TableCell>
                    {
                      loading ? <Skeleton sx={{width: '30%'}} /> :
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {summary.electrical}
                      </Typography>
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Box p={2}>
        <TablePagination
          component="div"
          count={filteredSummaryList.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box> */}
    </Card>
  );
};

SummaryTable.propTypes = {
  summaryList: PropTypes.array.isRequired
};

SummaryTable.defaultProps = {
  summaryList: []
};

export default SummaryTable;
