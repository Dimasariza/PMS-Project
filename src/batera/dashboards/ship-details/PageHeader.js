import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Ship Details
        </Typography>
        <Typography variant="subtitle2">
          Dashboard / Ship Details
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href="/ship-list" passHref>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<ArrowBackTwoToneIcon fontSize="small" />}
          >
            Ship List
          </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
