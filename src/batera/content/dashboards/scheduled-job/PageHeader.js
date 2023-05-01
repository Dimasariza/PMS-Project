import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';


function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const url = process.env.PUBLIC_URL || ""
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Scheduled Job
        </Typography>
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Dashboard / Scheduled Job
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
