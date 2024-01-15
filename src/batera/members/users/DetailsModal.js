import { 
  Typography,
  Button,
  IconButton,
  Grid,
  Box,
  CardContent,
  Card,
  CardHeader,
  Divider
} from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Text from 'src/components/Text';
import GridInfoDetails from 'src/components/CustomComponent/GridInfo/Static/GridInfoDetailsStatic';
import GridInfoDetailsEditable from 'src/components/CustomComponent/GridInfo/Editable/GridInfoDetailsEditable';
import GridInfoDetailsSelectable from 'src/components/CustomComponent/GridInfo/Selectable/GridInfoDetailsSelectable';

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const { onClose, selectedValue, open, handleUpdate, updateData, deleteData, deptOptionValue, titleOptionValue } = props;

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
              User Details
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
                display:{
                  xs: 'none',
                  sm: 'block'
                },
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsEditable title={"Name:"} value={selectedValue.name} handleEntryUpdate={(value) => handleUpdate('name', value)}/>
                  <GridInfoDetailsEditable title={"User Name:"} value={selectedValue.userName} handleEntryUpdate={(value) => handleUpdate('userName', value)}/>
                  <GridInfoDetailsEditable title={"Password:"} value={selectedValue.password} handleEntryUpdate={(value) => handleUpdate('password', value)}/>
                  <GridInfoDetailsEditable title={"Email:"} value={selectedValue.email} handleEntryUpdate={(value) => handleUpdate('email', value)}/>
                </Grid>
              </Typography>
              <Typography variant="subtitle2" sx={{
                display:{
                  xs: 'none',
                  sm: 'block'
                },
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsSelectable title={"Title:"} value={selectedValue.title} handleEntryUpdate={(value) => {handleUpdate('title', value)}}
                    options={titleOptionValue}
                  />
                  <GridInfoDetailsSelectable title={"Workplace:"} value={selectedValue.workplace} handleEntryUpdate={(value) => {handleUpdate('workplace', value)}}
                    options={[
                      {
                        text: 'Office',
                        value: 'office'
                      },
                      {
                        text: 'Ship',
                        value: 'ship'
                      }
                    ]}
                  />
                  <GridInfoDetailsSelectable title={"Status:"} value={selectedValue.status} handleEntryUpdate={(value) => {handleUpdate('status', value)}}
                    options={[
                      {
                        text: 'Active',
                        value: '1'
                      },
                      {
                        text: 'Inactive',
                        value: '0'
                      }
                    ]}
                  />
                  <GridInfoDetailsSelectable title={"Department:"} value={selectedValue.department} handleEntryUpdate={(value) => {handleUpdate('department', value)}}
                    options={deptOptionValue}
                  />
                </Grid>
              </Typography>
              <Typography variant="subtitle2" sx={{
                display:{
                  xs: 'block',
                  sm: 'none'
                },
                width: '100%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetails title={"Name:"} value={selectedValue.name}/>
                  <GridInfoDetails title={"User Name:"} value={selectedValue.userName}/>
                  <GridInfoDetails title={"Password:"} value={selectedValue.password}/>
                  <GridInfoDetails title={"Email:"} value={selectedValue.email}/>
                  <GridInfoDetails title={"Title:"} value={selectedValue.title}/>
                  <GridInfoDetails title={"Workplace:"} value={selectedValue.workplace}/>
                  <GridInfoDetails title={"Status:"} value={selectedValue.status}/>
                  <GridInfoDetails title={"Department:"} value={selectedValue.department}/>
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
              <Button variant="contained" color="primary" style={{width: '45%'}} onClick={() => {updateData(selectedValue)}}>
                Update
              </Button>
              <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}}
                onClick={() => {deleteData(selectedValue.id)}}
              >
                Delete
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