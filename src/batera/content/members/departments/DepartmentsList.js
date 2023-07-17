import { Card } from '@mui/material';
import DepartmentsTable from './DepartmentsTable';
import { subDays } from 'date-fns';
import { useState, useEffect, useContext } from 'react';
import DetailsModal from './DetailsModal';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { useRouter } from 'next/router';

function DepartmentsList() {
  const router = useRouter()
  const { user } = useContext(SidebarContext);
  const [departmentList, setDepartmentList] = useState([
  ]);
  const [refresher, setRefresher] = useState(false)

  const retriveData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/department', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const results = response.data.data.results;
      const convertedResults = []
      results.map((value, index) => {
        convertedResults.push({
          id: value.id,
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

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/v1/department/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response)
      retriveData()
    } catch (error) {
      console.log(error)
      // setLoginError(true)
    }
  }

  useEffect(() => {
    retriveData()
  }, [])

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: '0',
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
        deleteData={deleteData}
      />
    </>
  );
}

export default DepartmentsList;
