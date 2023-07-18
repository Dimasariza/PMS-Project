import { Card } from '@mui/material';
import UsersTable from './UsersTable';
import { subDays } from 'date-fns';
import { useState, useEffect, useContext } from 'react';
import DetailsModal from './DetailsModal';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

function UsersList() {
  const {user} = useContext(SidebarContext)
  const [usersList, setUserList] = useState([
    // {
    //   id: '1',
    //   name: 'Munreo Ducks',
    //   userName: 'munreo_ducks',
    //   password: 'password123',
    //   title: 'Chief Engineer',
    //   email: 'munreo@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Engine',
    // },
    // {
    //   id: '2',
    //   name: 'Gunila Canario',
    //   userName: 'gunila_canario',
    //   password: 'password123',
    //   title: 'Captain',
    //   email: 'gunila@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Deck',
    // },
    // {
    //   id: '3',
    //   name: 'Rowena Giestman',
    //   userName: 'rowena_giestman',
    //   password: 'password123',
    //   title: 'Chief Officer',
    //   email: 'rowena@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Deck',
    // },
    // {
    //   id: '4',
    //   name: 'Ede Stovings',
    //   userName: 'ede_stovings',
    //   password: 'password123',
    //   title: 'Admin',
    //   email: 'ede@marine.com',
    //   workplace: 'Office',
    //   status: 'Active',
    //   department: 'Administrator',
    // },
    // {
    //   id: '5',
    //   name: 'Crissy Spere',
    //   userName: 'crissy_spere',
    //   password: 'password123',
    //   title: 'Second Engineer',
    //   email: 'crissy@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Engine',
    // }
  ]);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: '5',
    name: 'Crissy Spere',
    userName: 'crissy_spere',
    password: 'password123',
    title: 'Second Engineer',
    email: 'crissy@marine.com',
    workplace: 'Ship',
    status: 'Active',
    department: 'Engine',
  });

  const [deptOptionValue, setDeptOptionValue] = useState([
    {
      text: 'departmentName',
      value: 'id',
    }
  ]);

  const [titleOptionValue, setTitleOptionValue] = useState([
    {
      text: 'titleName',
      value: 'id',
    }
  ]);

  
  const retriveData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/user', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const results = response.data.data.results;
      const convertedResults = []
      results.map((value, index) => {
        convertedResults.push({
          id: value.id,
          name: value.fullname,
          userName: value.username,
          password: 'password123',
          title: value.userTitle.id,
          email: value.email,
          workplace: value.workPlace,
          status: value.status,
          department: value.department.id,
        });
      })
      setUserList(convertedResults)
    } catch (error) {
      // setLoginError(true)
    }
  }

  const retriveDeptOptData = async () => {
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
          text: value.name,
          value: value.id,
        });
      })
      setDeptOptionValue(convertedResults)
    } catch (error) {
      // setLoginError(true)
    }
  }

  const retriveTitleOptData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/user_title', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const results = response.data.data.results;
      const convertedResults = []
      results.map((value, index) => {
        convertedResults.push({
          text: value.name,
          value: value.id,
        });
      })
      setTitleOptionValue(convertedResults)
    } catch (error) {
      // setLoginError(true)
    }
  }

  useEffect(() => {
    retriveData()
    retriveDeptOptData()
    retriveTitleOptData()
  }, [])

  const handleClickOpen = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  function handleUpdate(key, value) {
    setSelectedValue((prev) => {
      return {...prev, [key] : value}
    })
    // setTitleList((prevTitleList) => {
    //   const updatedTitleList = prevTitleList.map((title) =>
    //     title.id === selectedValue.id ? { ...title, [key]: value } : title
    //   );
    //   return updatedTitleList;
    // });
    // titleList.forEach((title) =>{
    //   if(title.id === selectedValue.id){
    //     updateData(title)
    //   } 
    // })
  }

  function handleUpdateSelected(id) {
    setUserList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === id ? { selectedValue } : title
      );
      return updatedTitleList;
    });
  }

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/v1/user/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      retriveData()
    } catch (error) {
      console.log(error)
    }
  }

  const updateData = async (data) => {
    try {
      const formData = new FormData();
      formData.append("fullname", data.name)
      formData.append("userTitleId", data.title)
      formData.append("workPlace", data.workplace)
      formData.append("status", data.status ? '1' : '0')
      formData.append("departmentId", data.department)
      const response = await axios.post(`http://127.0.0.1:8000/api/v1/user/${data.id}/update`, 
      formData,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      handleUpdateSelected(data.id)
      console.log(response)
      retriveData()
    } catch (error) {
      console.log(error)
    }
  }

  const getDeptName = (target) =>{
    for (let i = 0; i < deptOptionValue.length; i++) {
      const dept = deptOptionValue[i];
      if (dept.value === target) {
        return dept.text;
      }
    }
  }

  const getTitleName = (target) => {
    for (let i = 0; i < titleOptionValue.length; i++) {
      const title = titleOptionValue[i];
      if (title.value === target) {
        return title.text;
      }
    }
  }

  return (
    <>
      <Card>
        <UsersTable usersList={usersList} handleOpen={handleClickOpen} getDeptName={getDeptName} getTitleName={getTitleName}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        handleUpdate={handleUpdate}
        updateData={updateData}
        deleteData={deleteData}
        deptOptionValue={deptOptionValue}
        titleOptionValue={titleOptionValue}
      />
    </>
  );
}

export default UsersList;
