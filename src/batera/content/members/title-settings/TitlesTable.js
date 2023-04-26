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

import Label from 'src/components/Label';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';

const getStatusLabel = (TitlesList) => {
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

  const { text, color } = map[TitlesList];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (titles, filters) => {
  return titles.filter((title) => {
    let matches = true;

    if (filters.status && title.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (titles, page, limit) => {
  return titles.slice(page * limit, page * limit + limit);
};

const TitlesTable = ({ titleList, handleUpdate }) => {
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

  const filteredTitleList = applyFilters(titleList, filters);
  const paginatedTitleList = applyPagination(
    filteredTitleList,
    page,
    limit
  );
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title="Title Access"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">Title Name</TableCell>
              <TableCell align="center">Ship List</TableCell>
              <TableCell align="center">Ship Details</TableCell>
              <TableCell align="center">Unscheduled Job</TableCell>
              <TableCell align="center">Data Sheet</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Department</TableCell>
              <TableCell align="center">Notification</TableCell>
              <TableCell align="center">Inbox</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedTitleList.map((title, index) => {
              return (
                <TableRow hover key={title.id}>
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
                      {title.titleName}
                    </Typography>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'shipList', !title.shipList);
                        }}
                      >
                        {title.shipList ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center' >
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'shipDetails', !title.shipDetails);
                        }}
                      >
                        {title.shipDetails ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'jobList', !title.jobList);
                        }}
                      >
                        {title.jobList ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'dataSheet', !title.dataSheet);
                        }}
                      >
                        {title.dataSheet ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'stock', !title.stock);
                        }}
                      >
                        {title.stock ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'users', !title.users);
                        }}
                      >
                        {title.users ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'department', !title.department);
                        }}
                      >
                        {title.department ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'notification', !title.notification);
                        }}
                      >
                        {title.notification ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        size="small"
                        onClick={() => {
                          handleUpdate(title.id, 'inbox', !title.inbox);
                        }}
                      >
                        {title.inbox ? 
                          (
                            <CheckBoxTwoToneIcon fontSize="small" style={{ color: 'green' }} />
                          ) 
                          : 
                          (
                            <CheckBoxOutlineBlankTwoToneIcon fontSize="small" style={{ color: 'grey' }} />
                          )
                        }
                      </IconButton>
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
          count={filteredTitleList.length}
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

TitlesTable.propTypes = {
  titleList: PropTypes.array.isRequired
};

TitlesTable.defaultProps = {
  titleList: []
};

export default TitlesTable;
