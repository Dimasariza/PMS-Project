import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';


function PageHeader() {
  const { shipID } = useContext(SidebarContext);	
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Data Sheet
        </Typography>
        <Typography variant="subtitle2">
          {/* {user.name}, these are your recent transactions */}
          Equipment / Data Sheet
        </Typography>
      </Grid>
      <Grid item>
        <NextLink href={`/equipment/data-sheet/add-data-sheet?id=${shipID}`} passHref>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Add Data Sheet
          </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
