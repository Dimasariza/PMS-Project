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

const ShipCard = ({ shipInfo, entriesPerRow }) => {
  const url = process.env.PUBLIC_URL || ""

  const [cardSizes, setCardSizes] = useState([{
    cardWidth: '100%',
    imageHeight: '80%',
    textHeight: '10%',
    actionHeight: '10%',
    padding: '5%'
  },
  {
    cardWidth: '48%',
    imageHeight: '80%',
    textHeight: '10%',
    actionHeight: '10%',
    padding: '3%'
  },
  {
    cardWidth: '32%',
    imageHeight: '75%',
    textHeight: '12.5%',
    actionHeight: '12.5%',
    padding: '2%'
  },
  {
    cardWidth: '23%',
    imageHeight: '75%',
    textHeight: '12.5%',
    actionHeight: '12.5%',
    padding: '1%'
  },
  ]);

  return (
    <>
      <Card sx={{ 
        width: cardSizes[entriesPerRow - 1].cardWidth, 
        height: '35vh', minHeight: 300, 
        background: '#FFFFFF', 
        padding: cardSizes[entriesPerRow - 1].padding, boxSizing: 'border-box' }}>
          <CardMedia
            sx={{ height: cardSizes[entriesPerRow - 1].imageHeight }}
            image={url + shipInfo.image}
            title={shipInfo.shipName}
          />
          <CardContent sx={{ height: cardSizes[entriesPerRow - 1].textHeight }}>
            <Typography gutterBottom variant="h5" component="div" align='left' color='#000000'>
              {shipInfo.shipName}
            </Typography>
          </CardContent>
          <CardActions sx={{ height: cardSizes[entriesPerRow - 1].actionHeight }}>
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
