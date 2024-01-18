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
          Users
        </Typography>
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Members/Users
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={url + "/members/users/add-users"} passHref>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Add User
          </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
