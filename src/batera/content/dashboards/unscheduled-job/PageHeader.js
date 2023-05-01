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
          Unscheduled Job
        </Typography>
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Dashboard / Unscheduled Job
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={url + "/batera/dashboards/unscheduled-job/add-job"} passHref>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Add Job
          </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
