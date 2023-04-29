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

  const CardBlocks = ({index}) =>{
    return(
      <div style={{display: 'flex', width: '100%', flexDirection: 'row', gap: '2%', marginBottom: '2%'}}>
        <ShipCard shipInfo={shipList[index]}/>
        {index + 1 < shipList.length ? <ShipCard shipInfo={shipList[index + 1]}/> : null}
        {index + 2 < shipList.length ? <ShipCard shipInfo={shipList[index + 2]}/> : null}
        {index + 3 < shipList.length ? <ShipCard shipInfo={shipList[index + 3]}/> : null}
      </div>
    )
  }

  return (
    <>
      {
        shipList.map((ship, index) => {
          if(index % 4 === 0){
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
