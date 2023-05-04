import { Card } from '@mui/material';
import DepartmentsTable from './DepartmentsTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

function DepartmentsList() {
  const [departmentList, setDepartmentList] = useState([
    {
      departmentCode: '100',
      departmentName: 'Engine',
      workplace: 'Ship',
    },
    {
      departmentCode: '200',
      departmentName: 'Deck',
      workplace: 'Ship',
    },
    {
      departmentCode: '300',
      departmentName: 'Administrator',
      workplace: 'Office',
    },
    {
      departmentCode: '400',
      departmentName: 'Surveyor',
      workplace: 'Ship',
    },
    {
      departmentCode: '500',
      departmentName: 'Manager',
      workplace: 'Office',
    }
  ]);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    departmentCode: '500',
    departmentName: 'Manager',
    workplace: 'Office',
  });
  const handleClickOpen = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Card>
        <DepartmentsTable departmentList={departmentList} handleOpen={handleClickOpen} />
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default DepartmentsList;
