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
import ShipCard from './ShipCard';
import { useMediaQuery } from '@mui/material';

function Content() {
  const [shipList, setShipList] = useState([
    {
      id: '1',
      shipName: 'MV. AXES',
      image: "/static/images/ship-card/ship1.jpg",
    },
    {
      id: '2',
      shipName: 'MV. AXES',
      image: "/static/images/ship-card/ship2.jpg",
    },
    {
      id: '3',
      shipName: 'MV. AXES',
      image: "/static/images/ship-card/ship3.jpg",
    },
    {
      id: '4',
      shipName: 'MV. AXES',
      image: "/static/images/ship-card/ship4.jpg",
    },
    {
      id: '5',
      shipName: 'MV. AXES',
      image: "/static/images/ship-card/ship1.jpg",
    },
  ]);

  function handleUpdate(id, key, value) {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === id ? { ...title, [key]: value } : title
      );
      return updatedTitleList;
    });
  }

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const entriesPerRow = isSmallScreen ? 1 : isMediumScreen ? 2 : isLargeScreen ? 4 : 3;

  const CardBlocks = ({index}) =>{
    return(
      <div style={{display: 'flex', width: '100%', flexDirection: 'row', gap: '2%', marginBottom: '2%'}}>
        {Array(entriesPerRow).fill().map((_, i) => {
          const shipIndex = index + i;
          return shipIndex < shipList.length ? <ShipCard key={shipList[shipIndex].id} shipInfo={shipList[shipIndex]} entriesPerRow={entriesPerRow}/> : null;
        })}
      </div>
    )
  }

  return (
    <>
      {
        shipList.map((ship, index) => {
          if(index % entriesPerRow === 0){
            return (
              <CardBlocks index={index}/>
            )
          }
        }) 
      }
    </>
  );
}

export default Content;
