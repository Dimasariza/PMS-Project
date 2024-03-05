import { Card } from '@mui/material';
import UnscheduledJobTable from './UnscheduledJobTable';
import { subDays } from 'date-fns';
import DetailsModal from './DetailsModal';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';

function UnscheduledJobList() {
  const router = useRouter();
  const { shipID } = useContext(SidebarContext);	
  const [scheduledJobList, setScheduledJobList] = useState([
    {
      jobName: 'Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil Filter',
      part: 'Element Kit',
    },
    {
      jobName: 'Replace',
      componentCode: 'F4202-16000',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil Filter',
      part: 'Gasket',
    },
    {
      jobName: 'Check And Drain Water',
      componentCode: '35740-02100',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil System',
      part: 'Cartridge Assembly',
    },
    {
      jobName: 'Drain Water',
      componentCode: '41062-02103',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Fuel Filter',
      part: 'Cartridge',
    },
    {
      jobName: 'Check and Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil Filter',
      part: 'Element Kit',
    },
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

  const [errorState, setErrorState] = useState(
    {
      vesselName: null,
      IMO: null,
      yearBuilt: null,
      flag: null,
      DWT: null,
      grossTonage: null,
      callSign: null,
      LOA: null,
      breadth: null,
      vesselTypeGeneric: null,
      vesselTypeDetailed: null,
      vesselImage: null
    });

  const handleUpdate = (key, minYear, maxDigit, value) => {
    // console.log("Incoming ", key, "value", event);
    if(key == 'vesselImage'){
      if(value === undefined || value === null){
        setErrorState((prev) => ({
          ...prev,
          [key]: 'Gambar tidak boleh kosong',
        }));
      }else{
        const selectedFile = value;
        if (selectedFile) {
          const fileSizeInKB = selectedFile.size / 1024;
          if (fileSizeInKB > 1024) {
            setErrorState((prev) => ({
              ...prev,
              [key]: "Ukuran gambar tidak boleh melebihi 1 MB",
            }));
          } else {
            setSelectedValue((prev) => ({
              ...prev,
              [key]: value,
            }));
            setErrorState((prev) => ({
              ...prev,
              [key]: null,
            }));
          }
        }
      }
    }else{
      if(value === undefined || value === null){
        setErrorState((prev) => ({
          ...prev,
          [key]: `Kolom ${capitalizeFirstLetter(key)} belum diisi`,
        }));
      }else{
        if(minYear != undefined && value < minYear && value > 1000){
          setSelectedValue((prev) => ({
            ...prev,
            [key]: 1908,
          }));
          setErrorState((prev) => ({
            ...prev,
            [key]: `Tahun minimal 1908`,
          }));
        }else if(maxDigit != undefined && value > Math.pow(10, maxDigit) - 1){
          setErrorState((prev) => ({
            ...prev,
            [key]: `${capitalizeFirstLetter(key)} maximal ${maxDigit} digit`,
          }));
        }else{
          if((maxDigit != undefined || minYear != undefined )){
            if(checkIfNumber(value)){
              setSelectedValue((prev) => ({
                ...prev,
                [key]: value,
              }));
              setErrorState((prev) => ({
                ...prev,
                [key]: null,
              }));
            }else{
              setErrorState((prev) => ({
                ...prev,
                [key]: `${capitalizeFirstLetter(key)} hanya boleh diisi dengan angka`,
              }));
            }
          }else{
            setSelectedValue((prev) => ({
              ...prev,
              [key]: value,
            }));
            setErrorState((prev) => ({
              ...prev,
              [key]: null,
            }));
          }
        }
      }
    }
  };


  const handleClickOpen = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("scheduleID", selectedValue.componentCode)
    formData.append("approved", true)
    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/scheduledJob/"+selectedValue.componentCode+"/update" 
      const response = await axios.post(url, 
      formData);
    } catch (error) {
      console.log(error)
    }
  }

  const retriveData = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + `/jobs?page=1&ship_id=${shipID}&approved=false`
    // const response = await axios.get(url, {
    //   headers: {
    //     Authorization: `Bearer ${user.token}`,
    //   },
    // });
    await axios.get(url)
        .then(resp => processRetrivedData(resp.data.data))
        .catch(error => console.log(error))
  }

  const processRetrivedData = async (results) => {
    console.log(results)
    let retrivedJobs = []
    results.forEach(retrievedJob => {
      const singleObject = {
        job_name: retrievedJob.job_name,
        component_code: retrievedJob.component_code,
        department_name: retrievedJob.department_name,
        department_system: retrievedJob.department_system,
        component_name: retrievedJob.component_name,
        component_part: retrievedJob.component_part,
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
        <UnscheduledJobTable scheduledJobList={scheduledJobList} handleOpen={handleClickOpen}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default UnscheduledJobList;
