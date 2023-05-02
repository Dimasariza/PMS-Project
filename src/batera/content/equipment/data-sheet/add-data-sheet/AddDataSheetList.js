import { Card } from '@mui/material';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState } from 'react';

function AddDataSheetList() {
  const [filledDataSheet, setFilledDataSheet] = useState(
  {
    dataSheetCode: '',
    department: '',
    system: '',
    brand: '',
    component: '',
    part: '',
    serialNumber: '',
    maintenance: '',
    file: '',
  });

  const [departmentList, setDepartmentList] = useState([
    'Machine',
    'Office',
  ]);

  const [systemList, setsystemList] = useState([
    'Fuel System',
    'Targeting System'
  ]);

  const handleUpdate = (key) => (event) => {
    if(key == 'file'){
      setFilledDataSheet((prev) => ({
        ...prev,
        [key]: event.target.file[0],
      }));
    }else{
      setFilledDataSheet((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    }
  };

  return (
    <>
      <div style={{width: '100%'}}>
        <Card sx={{ width: '100%', padding: '1%', gap: '5%'}}>
          <CardHeader
              title="Add Data Sheet"
            />
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15%', height: '100%', width: '100%'}}>
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('dataSheetCode')}
              id="outlined-required"
              label="Data Sheet Code"
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('jobName')}
              id="outlined-required"
              label="Job Name"
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              id="outlined-select-currency-native"
              select
              label="Department"
              value={filledDataSheet.department}
              onChange={handleUpdate('department')}
              SelectProps={{
                native: true
              }}
            >
              {departmentList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              id="outlined-select-currency-native"
              select
              label="System"
              value={filledDataSheet.system}
              onChange={handleUpdate('system')}
              SelectProps={{
                native: true
              }}
            >
              {systemList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('brand')}
              id="outlined-required"
              label="Brand"
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('component')}
              id="outlined-required"
              label="Component Name"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('part')}
              id="outlined-required"
              label="Part Name"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('maintenance')}
              id="outlined-required"
              label="Maintenance Interval"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('serialNumber')}
              id="outlined-required"
              label="Serial Number"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('file')}
              type='file'
              id="outlined-required"
              helperText="Data Sheet File"
            /> 
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddDataSheetList;
