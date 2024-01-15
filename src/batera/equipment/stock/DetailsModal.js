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
import GridInfoDetailsSelectable from 'src/components/CustomComponent/GridInfo/Selectable/GridInfoDetailsSelectable';

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const { onClose, selectedValue, open, handleUpdate, confirmUpdate  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const customSizing = [6,6,5, 6,6,7];

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
              Stock Details
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
                  <GridInfoDetails title={"Equipment Code:"} value={selectedValue.equipmentCode}/>
                  <GridInfoDetails title={"Category:"} value={selectedValue.category}/>
                  <GridInfoDetails title={"Equipment:"} value={selectedValue.equipment}/>
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
                  <GridInfoDetailsSelectable title={"Department:"} value={selectedValue.department} handleEntryUpdate={(value) => handleUpdate('department', value)} gridSizes={customSizing}/>
                  <GridInfoDetails title={"Status Part:"} value={selectedValue.statusPart}/>
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
                  <GridInfoDetails title={"Equipment Code:"} value={selectedValue.equipmentCode} gridSizes={customSizing}/>
                  <GridInfoDetails title={"Category:"} value={selectedValue.category} gridSizes={customSizing}/>
                  <GridInfoDetails title={"Equipment:"} value={selectedValue.equipment} gridSizes={customSizing}/>
                  <GridInfoDetailsSelectable title={"Department:"} value={selectedValue.department} handleEntryUpdate={(value) => handleUpdate('department', value)} gridSizes={customSizing}/>
                  <GridInfoDetails title={"Status Part:"} value={selectedValue.statusPart} gridSizes={customSizing}/>
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
              <Button variant="contained" color="primary" style={{width: '45%'}} onClick={() => {confirmUpdate(0); handleClose();}}>
                Update
              </Button>
              <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}}>
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
};

export default DetailsModal;