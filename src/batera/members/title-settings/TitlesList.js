import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';
import { useContext, useEffect } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
import axios from 'axios';

function TitlesList() {
  const {user} = useContext(SidebarContext)
  const [titleList, setTitleList] = useState([
    // {
    //   id: '1',
    //   titleName: 'Admin',
    //   shipList: true,
    //   shipDetails: false,
    //   jobList: true,
    //   dataSheet: true,
    //   stock: false,
    //   users: true,
    //   department: true,
    //   notification: true,
    //   inbox: true,
    // },
    // {
    //   id: '2',
    //   titleName: 'Captain',
    //   shipList: true,
    //   shipDetails: true,
    //   jobList: true,
    //   dataSheet: true,
    //   stock: true,
    //   users: true,
    //   department: true,
    //   notification: true,
    //   inbox: true,
    // },
    // {
    //   id: '3',
    //   titleName: 'Chief Engineer',
    //   shipList: true,
    //   shipDetails: true,
    //   jobList: true,
    //   dataSheet: true,
    //   stock: true,
    //   users: true,
    //   department: true,
    //   notification: true,
    //   inbox: true,
    // },
    // {
    //   id: '4',
    //   titleName: 'Chief Officer',
    //   shipList: true,
    //   shipDetails: true,
    //   jobList: true,
    //   dataSheet: true,
    //   stock: true,
    //   users: true,
    //   department: true,
    //   notification: false,
    //   inbox: false,
    // },
    // {
    //   id: '5',
    //   titleName: 'Second Engineer',
    //   shipList: true,
    //   shipDetails: true,
    //   jobList: true,
    //   dataSheet: false,
    //   stock: true,
    //   users: true,
    //   department: true,
    //   notification: true,
    //   inbox: true,
    // },
    // {
    //   id: '6',
    //   titleName: 'TestUser',
    //   shipList: true,
    //   shipDetails: true,
    //   jobList: true,
    //   dataSheet: true,
    //   stock: true,
    //   users: true,
    //   department: true,
    //   notification: true,
    //   inbox: true,
    // }
  ]);

  const retriveData = async () => {
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
          id: value.id,
          titleName: value.name,
          shipList: value.access.shipList,
          shipDetails: value.access.shipDetails,
          jobList: value.access.jobList,
          dataSheet: value.access.dataSheet,
          stock: value.access.stock,
          users: value.access.users,
          department: value.access.department,
          notification: value.access.inbox,
          inbox: value.access.inbox,
        });
      })
      setTitleList(convertedResults)
    } catch (error) {
      // setLoginError(true)
    }
  }

  useEffect(() => {
    retriveData()
  }, [])

  function handleUpdate(id, key, value) {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === id ? { ...title, [key]: value } : title
      );
      return updatedTitleList;
    });
    titleList.forEach((title) =>{
      if(title.id === id){
        updateData(title)
      } 
    })
  }

  function handleUpdateSelected(key, value) {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === selectedValue.id ? { ...title, [key]: value } : title
      );
      return updatedTitleList;
    });
    setSelectedValue((prev) => {
      return {...prev, [key] : value}
    })
  }

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/v1/user_title/${id}`, {
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
      const sendData = {
        "titleName": data.titleName,
        "titleAccess": {
            "shipList": data.shipList,
            "shipDetails": data.shipDetails,
            "jobList": data.jobList,
            "dataSheet": data.dataSheet,
            "stock": data.stock,
            "users": data.users,
            "department": data.department,
            "inbox": data.inbox
        }
      }
      const response = await axios.put(`http://127.0.0.1:8000/api/v1/user_title/${data.id}`, 
      sendData,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response)
      retriveData()
    } catch (error) {
      console.log(error)
    }
  }

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: '6',
    titleName: 'TestUser',
    shipList: true,
    shipDetails: true,
    jobList: true,
    dataSheet: true,
    stock: true,
    users: true,
    department: true,
    notification: true,
    inbox: true,
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
    <div style={{width: '100%', height: '100%'}}>
      <Card>
        <TitlesTable titleList={titleList} handleUpdate={handleUpdate} handleOpen={handleClickOpen}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        deleteData={deleteData}
        updateData={updateData}
        handleUpdate={handleUpdateSelected}
      />
    </div>
  );
}

export default TitlesList;
