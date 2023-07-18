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
import { useRouter } from 'next/router';
import GridInfoDetailsEditable from 'src/components/CustomComponent/GridInfo/Editable/GridInfoDetailsEditable';

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const router = useRouter();
  const { onClose, selectedValue, open, deleteData, updateData, handleUpdate } = props;

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
              Department Details
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
                width: '100%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetailsEditable title={"Department Code:"} value={selectedValue.departmentCode} handleEntryUpdate={(value) => handleUpdate('departmentCode', value)}/>
                  <GridInfoDetailsEditable title={"Department Name:"} value={selectedValue.departmentName} handleEntryUpdate={(value) => handleUpdate('departmentName', value)}/>
                  <GridInfoDetailsEditable title={"Workplace:"} value={selectedValue.workplace} handleEntryUpdate={(value) => handleUpdate('workplace', value)}/>
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
              
              <Button variant="contained" color="primary" style={{width: '45%'}}
                onClick={() => {
                  updateData(selectedValue)
                  handleClose()
                }}
              >
                Update
              </Button>
              <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}} onClick={() => {
                deleteData(selectedValue.id);
                handleClose()
                }}>
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