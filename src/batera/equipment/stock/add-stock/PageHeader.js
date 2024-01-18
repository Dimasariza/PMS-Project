import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function PageHeader({postData}) {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const url = process.env.PUBLIC_URL || ""
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        {/* <Typography variant="h3" component="h3" gutterBottom>
          Titles
        </Typography> */}
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Equipment / Stock / Add Stock
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href="/equipment/stock" passHref>
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
          Save Stock
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
