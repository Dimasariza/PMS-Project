import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';


function PageHeader({postData}) {
  const { shipID } = useContext(SidebarContext);	
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        {/* <Typography variant="h3" component="h3" gutterBottom>
          Titles
        </Typography> */}
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Dashboard / Unscheduled Job / Add Job
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={`/dashboards/unscheduled-job?id=${shipID}`} passHref>
          <Button
              sx={{ mt: { xs: 2, md: 0 }, marginRight: 2 }}
              variant="contained"
              startIcon={<ArrowBackTwoToneIcon fontSize="small" />}
            >
              Back
          </Button>
        </NextLink>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<SaveTwoToneIcon fontSize="small" />}
          onClick={() => {postData()}}
        >
          Save Unscheduled Job
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
