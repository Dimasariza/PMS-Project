import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';


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
          Ship Details
        </Typography>
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Dashboard / Ship Details
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={url + "/batera/ship-list"} passHref>
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
