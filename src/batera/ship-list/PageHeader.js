import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useMediaQuery } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const screenFontSize = isSmallScreen ? 12 : isMediumScreen ? 14 : isLargeScreen ? 18 : 16;

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="subtitle2" sx={{ fontSize: screenFontSize }} >
          Ship List
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href="/ship-list/add-ship" passHref>
          <Button
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
