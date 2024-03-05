import { Card } from '@mui/material';
import ScheduledJobTable from './ScheduledJobTable';
import { subDays } from 'date-fns';
import DetailsModal from './DetailsModal';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CustomTable from 'src/components/CustomComponent/CustomTable/CustomTable'

function ScheduledJobList() {
  const router = useRouter();
  const { shipID } = useContext(SidebarContext);	
  const [scheduledJobList, setScheduledJobList] = useState([
    {},{},{},{},{},{},{},{},{},{},
  ]);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    jobName: 'Check and Replace',
    componentCode: '41040-10190',
    department: 'Engine',
    system: 'Main Engine',
    component: 'Oil Filter',
    part: 'Element Kit',
  });

  const [selectedValueIndex, setSelectedValueIndex] = useState(0);

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleChangingPage = (newPage) => {
    setPage(newPage);
  }

  const handleChangingLimit = (newLimit) => {
    setPage(newLimit);
  }

  const handleClickOpen = (value, index) => {
    setSelectedValue(value);
    setSelectedValueIndex(index);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if(value.confirmApprove){
      postData(value);
    }
  };

  const handleUpdate = (key,value) => {
    setSelectedValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const confirmUpdate = () => {
    setScheduledJobList(prevList => {
      const newList = [...prevList]; // make a copy of the original array
      newList[selectedValueIndex] = selectedValue; // update the second entry
      return newList; // return the updated array
    });
  };

  const confirmApprove = (selectedValue) =>{
    console.log("Approve this please ", selectedValue)
  }

  const postData = async () => {
    const formData = new FormData();
    formData.append("scheduleID", selectedValue.componentCode)
    formData.append("approved", true)
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/jobs/"+selectedValue.id+"/update" 
      const response = await axios.post(url, 
      formData);
    } catch (error) {
      console.log(error)
    }
  }

  const retriveData = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + `/jobs?page=${page}&limit=${limit}&ship_id=${shipID}&approved=true`
    // const response = await axios.get(url, {
    //   headers: {
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
    await axios.get(url)
        .then(resp => {processRetrivedData(resp.data.jobs); console.log(resp.data.total_entries); })
        .catch(error => console.log(error))
  }

  const processRetrivedData = async (results) => {
    // console.log(results)
    let retrivedJobs = []
    results.forEach(retrievedJob => {
      const singleObject = {
        job_name: retrievedJob.job_name,
        component_code: retrievedJob.component_code,
        department_name: retrievedJob.department_name,
        department_system: retrievedJob.department_system,
        component_name: retrievedJob.component_name,
        component_part: retrievedJob.component_part,
        running_hour: retrievedJob.running_hour,
        interval: retrievedJob.interval,
        diffrence: retrievedJob.diffrence,
        job_status: retrievedJob.job_status,
        job_level: retrievedJob.job_level,
      }
      retrivedJobs.push(singleObject)
    });

    setScheduledJobList(retrivedJobs);
  }

  useEffect(() => {
      if(router.isReady) retriveData()
  }, [router.isReady])
  
  return (
    <>
      <Card>
        {/* <ScheduledJobTable scheduledJobList={scheduledJobList} handleOpen={handleClickOpen}/> */}
        {/* table_name, headerNames, values,  handleOpen, handleChangingPage, handleChangingLimit */}
        <CustomTable 
          table_name={"Scheduled Job"} 
          headerNames={[
            ["Job Name", 'job_name'],
            ["Component Code", 'component_code'],
            ["Department", 'department_name'],
            ["System", 'department_system'],
            ["Component Name", 'component_name'],
            ["Part", 'component_part'],
          ]} 
          values={scheduledJobList}  
          handleOpen={handleClickOpen} 
          handleChangingPage={handleChangingPage}
          handleChangingLimit={handleChangingLimit}
          defaultPageLimit={[page, limit]}
        />
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        handleUpdate={handleUpdate}
        confirmUpdate={confirmUpdate}
      />
    </>
  );
}

export default ScheduledJobList;
