import { Card } from '@mui/material';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState } from 'react';

function AddJobList() {
  const [filledJob, setFilledJob] = useState(
  {
    jobName: '',
    department: '',
    system: '',
    brand: '',
    componentName: '',
    partName: '',
    personInCharge: '',
    status: '',
    level: '',
  });

  const [departmentList, setDepartmentList] = useState([
    'Machine',
    'Office',
  ]);

  const [systemList, setsystemList] = useState([
    'Fuel System',
    'Targeting System'
  ]);

  const [statusList, setStatusList] = useState([
    'On Progress',
    'Trouble',
    'Done'
  ]);

  const [levelList, setLevelList] = useState([
    'Low',
    'Medium',
    'High'
  ]);

  const handleUpdate = (key) => (event) => {
    setFilledJob((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  return (
    <>
      <div style={{width: '100%'}}>
        <Card sx={{ width: '100%', padding: '1%', gap: '5%'}}>
          <CardHeader
              title="Add Job"
            />
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15%', height: '100%', width: '100%'}}>
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Job Name"
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              id="outlined-select-currency-native"
              select
              label="Department"
              value={filledJob.department}
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
              value={filledJob.system}
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
              id="outlined-required"
              label="Brand"
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Component Name"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Part Name"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Person In Charge"
            /> 

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              id="outlined-select-currency-native"
              select
              label="Status"
              value={filledJob.status}
              onChange={handleUpdate('status')}
              SelectProps={{
                native: true
              }}
            >
              {statusList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              id="outlined-select-currency-native"
              select
              label="Level"
              value={filledJob.level}
              onChange={handleUpdate('level')}
              SelectProps={{
                native: true
              }}
            >
              {levelList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddJobList;
