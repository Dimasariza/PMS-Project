import { Card } from '@mui/material';
import DepartmentsTable from './DepartmentsTable';
import { subDays } from 'date-fns';
import { useState, useEffect, useContext } from 'react';
import DetailsModal from './DetailsModal';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

function DepartmentsList() {
  const { user } = useContext(SidebarContext);
  const [departmentList, setDepartmentList] = useState([
    // {
    //   departmentCode: '100',
    //   departmentName: 'Engine',
    //   workplace: 'Ship',
    // },
    // {
    //   departmentCode: '200',
    //   departmentName: 'Deck',
    //   workplace: 'Ship',
    // },
    // {
    //   departmentCode: '300',
    //   departmentName: 'Administrator',
    //   workplace: 'Office',
    // },
    // {
    //   departmentCode: '400',
    //   departmentName: 'Surveyor',
    //   workplace: 'Ship',
    // },
    // {
    //   departmentCode: '500',
    //   departmentName: 'Manager',
    //   workplace: 'Office',
    // }
  ]);

  const retriveData = async () => {
    console.log("Entring try")
    try {
      console.log("Entring in seconds")
      const response = await axios.get('http://127.0.0.1:8000/api/v1/department', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const results = response.data.data.results;
      const convertedResults = []
      results.map((value, index) => {
        convertedResults.push({
          departmentCode: value.code,
          departmentName: value.name,
          workplace: value.workPlace,
        });
      })
      setDepartmentList(convertedResults)
    } catch (error) {
      // setLoginError(true)
    }
  }

  useEffect(() => {
    console.log("Test retrive data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    retriveData()
  }, [])

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
