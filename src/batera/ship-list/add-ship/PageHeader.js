import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function PageHeader({postData}) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="subtitle2">
          Ship List/Add Ship
        </Typography>
      </Grid>
      <Grid item >
        <NextLink href="/ship-list" passHref>
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
          Save Ship
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
