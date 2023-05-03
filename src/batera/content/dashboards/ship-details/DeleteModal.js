import { 
  Typography,
  Button,
  IconButton
} from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const url = process.env.PUBLIC_URL || ""

function DeleteModal(props) {
  const { onClose, selectedValue, open, shipName } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:"space-between", alignItems:"center"}}>
          <Typography align='left' variant="h6" style={{ fontWeight: 'bold' }}>
            Delete Ship
          </Typography>
          <IconButton align='right'  onClick={handleClose} variant="contained" color='error'>
            <CloseTwoToneIcon fontSize='small' />
          </IconButton>
        </div>
      </DialogTitle>
      <div style={{padding: '5%'}}>
        <Typography align='center' variant="h5" style={{ fontWeight: 'bold', marginBottom: '5%' }}>
          {"Are you sure you want to delete " + shipName+"?"}
        </Typography>
        <div style={{display: 'flex', padding: '1%', gap: '2%', justifyContent: 'center', alignItems: 'center'}}>
          <NextLink href= {url + "/batera/ship-list"} passHref>
            <Button variant="contained" color="primary" style={{backgroundColor: '#FF5AD9'}}>
              Yes
            </Button>
          </NextLink>
          <Button variant="contained" color="primary" onClick={handleClose} style={{}}>
            No
          </Button>
          
        </div>
      </div>
    </Dialog>
  );
}

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  shipName: PropTypes.string.isRequired,
};

export default DeleteModal;