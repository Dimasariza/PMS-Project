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

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const { onClose, selectedValue, open, handleUpdate, confirmUpdate } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  
    // const handleUpdate = (key) => (event) => {
    //   setDepartmentList((prev) => ({
    //     ...prev,
    //     [key]: event.target.value,
    //   }));
    // };

    // <TextField
    //   sx={{ width: '100%', paddingBottom: '2%'}}
    //   required
    //   id="outlined-required"
    //   label="Job Name"
    // />

    // <TextField
    //   sx={{ width: '100%', paddingBottom: '2%'}}
    //   id="outlined-select-currency-native"
    //   select
    //   label="Department"
    //   value={filledJob.department}
    //   onChange={handleUpdate('department')}
    //   SelectProps={{
    //     native: true
    //   }}
    // >
    //   {departmentList.map((option) => (
    //     <option key={option} value={option}>
    //       {option}
    //     </option>
    //   ))}
    // </TextField>

  const GridInfoDetails = ({title, value}) => {
    return(
      <>
        <Grid item xs={4} sm={4} md={7} textAlign={{ sm: 'left' }}>
          <Box pr={3} pb={2} minHeight={'5vh'}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={8} sm={8} md={5}>
          <Box minHeight={'5vh'}>
            <Text color="black" width='100%'>
              <b>{value}</b>
            </Text>
          </Box>
        </Grid>
      </>
    );
  }

  const GridInfoDetailsEditable = ({title, value, handleEntryUpdate}) => {
    const [activateEdit, setActivateEdit] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    return(
      <>
        <Grid item xs={4} sm={4} md={7} textAlign={{ sm: 'left' }}>
          <Box pr={3} pb={2} minHeight={'5vh'}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={8} sm={8} md={5}>
          <Box minHeight={'5vh'}>
            <div style={{display: activateEdit ? 'none' : 'block'}} onClick={() => setActivateEdit((prev) => {return !prev})}>
              <Text color="black" width='100%'>
                <b>{value}</b>
              </Text>
            </div>
            <div style={{display: activateEdit ? 'block' : 'none'}}>
              <TextField
                sx={{ width: '50%', paddingBottom: '2%'}}
                required
                id="standard-required"
                variant="standard"
                defaultValue={value}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <IconButton onClick={() => {
                setActivateEdit(false);
                handleEntryUpdate(inputValue);
                }}>
                <CheckTwoToneIcon />
              </IconButton>
              <IconButton onClick={() => setActivateEdit(false)}>
                <CloseTwoToneIcon />
              </IconButton>
            </div>
          </Box>
        </Grid>
      </>
    );
  }

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={'md'} >
      <div>
        <Card>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent:"space-between", alignItems:"center", padding: '2% 2% 2% 3%'}}>
            <Typography align='left' variant="h3" style={{ width: '100%', height: '100%', fontWeight: 'bold' }}>
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
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsEditable title={"Job Name:"} value={selectedValue.jobName} handleEntryUpdate={(value) => handleUpdate('jobName', value)}/>
                  <GridInfoDetails title={"Component Code:"} value={selectedValue.componentCode}/>
                  <GridInfoDetails title={"Department:"} value={selectedValue.department}/>
                </Grid>
              </Typography>
              <Typography variant="subtitle2" sx={{
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetails title={"System:"} value={selectedValue.system}/>
                  <GridInfoDetails title={"Component:"} value={selectedValue.component}/>
                  <GridInfoDetails title={"Part:"} value={selectedValue.part}/>
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
              <NextLink href= {url + "/batera/dashboards/ship-details/update-ship"} passHref>
                <Button variant="contained" color="primary" style={{width: '45%'}}>
                  Approve
                </Button>
              </NextLink>
              <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}} onClick={() => {confirmUpdate(0); handleClose();}}>
                Update
              </Button>
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
  selectedValue: PropTypes.string.isRequired,
  shipName: PropTypes.string.isRequired,
};

export default DetailsModal;