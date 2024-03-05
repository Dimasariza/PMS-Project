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

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const { onClose, selectedValue, open } = props;

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
              Data Sheet Details
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
                  <GridInfoDetails title={"Data Sheet Code:"} value={selectedValue.dataSheetCode}/>
                  <GridInfoDetails title={"Department:"} value={selectedValue.department}/>
                  <GridInfoDetails title={"System:"} value={selectedValue.system}/>
                  <GridInfoDetails title={"Brand:"} value={selectedValue.brand}/>
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
                  <GridInfoDetails title={"Component:"} value={selectedValue.component}/>
                  <GridInfoDetails title={"Part:"} value={selectedValue.part}/>
                  <GridInfoDetails title={"Maintenance:"} value={selectedValue.maintenance}/>
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
                  <GridInfoDetails title={"Data Sheet Code:"} value={selectedValue.dataSheetCode}/>
                  <GridInfoDetails title={"Department:"} value={selectedValue.department}/>
                  <GridInfoDetails title={"System:"} value={selectedValue.system}/>
                  <GridInfoDetails title={"Brand:"} value={selectedValue.brand}/>
                  <GridInfoDetails title={"Component:"} value={selectedValue.component}/>
                  <GridInfoDetails title={"Part:"} value={selectedValue.part}/>
                  <GridInfoDetails title={"Maintenance:"} value={selectedValue.maintenance}/>
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
              {/* <NextLink href= {url + "/batera/dashboards/ship-details/update-ship"} passHref>
                
              </NextLink> */}
              <Button variant="contained" color="primary" style={{width: '45%'}}>
                Update Job
              </Button>
              <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}}>
                Delete Job
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
  // selectedValue: PropTypes.string.isRequired,
  // shipName: PropTypes.string.isRequired,
};

export default DetailsModal;