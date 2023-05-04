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

const url = process.env.PUBLIC_URL || ""

function DetailsModal(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

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
            <Text color="black">
              <b>{value}</b>
            </Text>
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
              Titles Details
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
                width: '30vw',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetails title={"Title Name:"} value={selectedValue.titleName}/>
                </Grid>
              </Typography>
              {/* <Typography variant="subtitle2" sx={{
                width: '50%',
              }}>
                <Grid container spacing={0} alignItems="stretch">
                  <GridInfoDetails title={"Part:"} value={selectedValue.part}/>
                  <GridInfoDetails title={"Running Hours:"} value={selectedValue.runningHours}/>
                  <GridInfoDetails title={"Maintenance Interval:"} value={selectedValue.maintenanceInterval}/>
                  <GridInfoDetails title={"Diffrent:"} value={selectedValue.diffrent}/>
                  <GridInfoDetails title={"Status:"} value={selectedValue.status}/>
                </Grid>
              </Typography> */}
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
                  Update
                </Button>
              </NextLink>
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
  selectedValue: PropTypes.string.isRequired,
  shipName: PropTypes.string.isRequired,
};

export default DetailsModal;