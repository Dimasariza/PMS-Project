import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';


function PageHeader() {
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
          Equipment / Data Sheet / Add Data Sheet
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={url + "/batera/equipment/data-sheet"} passHref>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<SaveTwoToneIcon fontSize="small" />}
          >
            Save Data Sheet
          </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
