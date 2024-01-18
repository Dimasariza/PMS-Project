import { Card } from '@mui/material';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState } from 'react';

function AddStockList() {
  const [filledStock, setFilledJob] = useState(
  {
    equipmentCode: '',
    equipmentName: '',
    department: '',
    statusPart: '',
    category: '',
  });

  const [departmentList, setDepartmentList] = useState([
    'Machine',
    'Office',
  ]);

  const [statusPart, setStatusPart] = useState([
    'On Board',
    'Borrowing',
    'Ordering'
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
              title="Add Stock"
            />
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15%', height: '100%', width: '100%'}}>
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('equipmentCode')}
              id="outlined-required"
              label="Equipment Code"
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              onChange={handleUpdate('equipmentName')}
              id="outlined-required"
              label="Equipment Name"
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              id="outlined-select-currency-native"
              select
              label="Department"
              value={filledStock.department}
              onChange={handleUpdate('department')}
              SelectProps={{
                native: true
              }}
              InputLabelProps={{ shrink: true }}
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
              label="Status Part"
              value={filledStock.statusPart}
              onChange={handleUpdate('statusPart')}
              SelectProps={{
                native: true
              }}
              InputLabelProps={{ shrink: true }}
            >
              {statusPart.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              onChange={handleUpdate('category')}
              label="Category"
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddStockList;
