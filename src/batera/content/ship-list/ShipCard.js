import { Card } from '@mui/material';
import TitlesTable from './ShipCard';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField,
  CardMedia,
  CardContent
} from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Link from 'src/components/Link';

const ShipCard = ({ shipInfo }) => {
  const url = process.env.PUBLIC_URL || ""
  return (
    <>
      <Card sx={{ width: '23%', height: '35vh', background: '#FFFFFF', padding: '1%' }}>
          <CardMedia
            sx={{ height: '80%' }}
            image={url + shipInfo.image}
            title={shipInfo.shipName}
          />
          <CardContent sx={{ height: '10%' }}>
            <Typography gutterBottom variant="h5" component="div" align='left' color='#000000'>
              {shipInfo.shipName}
            </Typography>
          </CardContent>
          <CardActions sx={{ height: '10%' }}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
              <NextLink href= {url + "/batera/dashboards/ship-details"} passHref>
                <Button 
                  size="small" 
                  component={Link}
                  width='50%' 
                  variant="contained" 
                  color="primary"
                  className="text-3xl font-bold underline"
                >
                  See Details
                </Button>
              </NextLink >
            </div>
          </CardActions>
        </Card>
    </>
  );
};

export default ShipCard;
