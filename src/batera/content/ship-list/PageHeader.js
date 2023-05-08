import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useMediaQuery } from '@mui/material';


function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const url = process.env.PUBLIC_URL || ""
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const screenFontSize = isSmallScreen ? 14 : isMediumScreen ? 16 : isLargeScreen ? 18 : 18;

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        {/* <Typography variant="h3" component="h3" gutterBottom>
          Titles
        </Typography> */}
        <Typography variant="subtitle2" sx={{ fontSize: screenFontSize }} >
          {/* {user.name}, these are your recent transactions */}
          Ship List
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={url + "/batera/ship-list/add-ship"} passHref>
          <Button
            sx={{ }}
            variant="contained"
            startIcon={<AddTwoToneIcon sx={{ fontSize: screenFontSize }}   />}
          >
            <Typography sx={{ fontSize: screenFontSize }}  >
              Add Ship
            </Typography>
          </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
