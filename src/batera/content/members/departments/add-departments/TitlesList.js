import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState } from 'react';

function TitlesList() {
  const [departmentList, setDepartmentList] = useState(
  {
    departmentCode: '',
    departmentName: '',
    workplace: '',
  });

  const [workplaceList, setWorkplaceList] = useState([
    {
      workplace: 'Ship',
    },
    {
      workplace: 'Office',
    }
  ]);

  const handleUpdate = (key) => (event) => {
    setDepartmentList((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  return (
    <>
      <div style={{width: '100%'}}>
        <Card sx={{ width: '100%', padding: '1%', gap: '5%'}}>
          <CardHeader
              title="Add Department"
            />
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15%', height: '100%', width: '100%'}}>
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Department Code"
            />
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Department Name"
            />
            <TextField
              sx={{ width: '100%'}}
              id="outlined-select-currency-native"
              select
              label="Workplace"
              value={departmentList.workplace}
              onChange={handleUpdate('workplace')}
              SelectProps={{
                native: true
              }}
              helperText="Please select new user's workplace"
            >
              {workplaceList.map((option) => (
                <option key={option.workplace} value={option.workplace}>
                  {option.workplace}
                </option>
              ))}
            </TextField>
          </div>
        </Card>
      </div>
    </>
  );
}

export default TitlesList;
