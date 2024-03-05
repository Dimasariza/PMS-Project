import { 
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
  CardContent,
  Card,
  CardHeader,
  Divider,
  TextField
} from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Text from 'src/components/Text';
import { useState } from 'react';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import GridInfoDetailsEditable from 'src/components/CustomComponent/GridInfo/Editable/GridInfoDetailsEditable';
import GridInfoDetails from 'src/components/CustomComponent/GridInfo/Static/GridInfoDetailsStatic';

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const { onClose, selectedValue, open, handleUpdate, confirmUpdate } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={'md'} >
      <div>
        <Card>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent:"space-between", alignItems:"center", padding: '2% 2% 2% 3%'}}>
            <Typography align='left' variant="h3" style={{ width: '100%', height: '100%', fontWeight: 'bold' }} 
              sx={{
                fontSize:{
                  xs: '15px',
                  sm: '25px'
                }
              }}
            >
              Scheduled Job Details
            </Typography>
            <IconButton align='right'  onClick={handleClose} variant="contained" color='primary' style={{height:'50%', backgroundColor: '#FF5AD9'}}>
              <CloseTwoToneIcon fontSize='small' style={{color: 'white'}} />
            </IconButton>
          </div>
          <Divider />
          <CardContent>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gap: '5%',
              padding: '1%',
              
            }}>
              <Typography variant="subtitle2" sx={{
                display: {
                  xs: 'none',
                  sm: 'block'
                },
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsEditable title={"Job Name:"} value={selectedValue.job_name} handleEntryUpdate={(value) => handleUpdate('job_name', value)}/>
                  <GridInfoDetails title={"Component Code:"} value={selectedValue.component_code} handleEntryUpdate={(value) => handleUpdate('component_code', value)}/>
                  <GridInfoDetails title={"Department:"} value={selectedValue.department_name} handleEntryUpdate={(value) => handleUpdate('department_name', value)}/>
                  <GridInfoDetails title={"System:"} value={selectedValue.department_system} handleEntryUpdate={(value) => handleUpdate('department_system', value)}/>
                  <GridInfoDetails title={"Component Name:"} value={selectedValue.component_name} handleEntryUpdate={(value) => handleUpdate('component_name', value)}/>
                  <GridInfoDetails title={"Part:"} value={selectedValue.component_part} handleEntryUpdate={(value) => handleUpdate('component_part', value)}/>
                </Grid>
              </Typography>
              <Typography variant="subtitle2" sx={{
                display: {
                  xs: 'none',
                  sm: 'block'
                },
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsEditable title={"Running Hours:"} value={selectedValue.running_hour} handleEntryUpdate={(value) => handleUpdate('running_hour', value)}/>
                  <GridInfoDetails title={"Maintenance Interval:"} value={selectedValue.interval} handleEntryUpdate={(value) => handleUpdate('interval', value)}/>
                  <GridInfoDetails title={"Diffrence:"} value={selectedValue.diffrence} handleEntryUpdate={(value) => handleUpdate('diffrence', value)}/>
                  <GridInfoDetails title={"Status:"} value={selectedValue.job_status} handleEntryUpdate={(value) => handleUpdate('job_status', value)}/>
                  <GridInfoDetails title={"Level:"} value={selectedValue.job_level} handleEntryUpdate={(value) => handleUpdate('job_level', value)}/>
                </Grid>
              </Typography>
              <Typography variant="subtitle2" sx={{
                display: {
                  xs: 'block',
                  sm: 'none'
                },
                width: '100%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsEditable title={"Job Name:"} value={selectedValue.job_name} handleEntryUpdate={(value) => handleUpdate('job_name', value)}/>
                  <GridInfoDetails title={"Component Code:"} value={selectedValue.component_code} handleEntryUpdate={(value) => handleUpdate('component_code', value)}/>
                  <GridInfoDetails title={"Department:"} value={selectedValue.department_name} handleEntryUpdate={(value) => handleUpdate('department_name', value)}/>
                  <GridInfoDetails title={"System:"} value={selectedValue.department_system} handleEntryUpdate={(value) => handleUpdate('department_system', value)}/>
                  <GridInfoDetails title={"Component Name:"} value={selectedValue.component_name} handleEntryUpdate={(value) => handleUpdate('component_name', value)}/>
                  <GridInfoDetails title={"Part:"} value={selectedValue.component_part} handleEntryUpdate={(value) => handleUpdate('component_part', value)}/>
                </Grid>
              </Typography>
            </div>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              gap: '5%',
              padding: '1%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button variant="contained" color="primary" style={{width: '45%'}} onClick={() =>{selectedValue.confirmed = true; handleClose()}}>
                Approve
              </Button>
              {/* <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}} onClick={() => {confirmUpdate(0); handleClose();}}>
                Update
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </Dialog>
  );
}

DetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
  // shipName: PropTypes.string.isRequired,
};

export default DetailsModal;