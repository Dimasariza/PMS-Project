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
              <Button size="small" width='50%' variant="contained" color="primary">See Details</Button>
            </div>
          </CardActions>
        </Card>
    </>
  );
};

export default ShipCard;
