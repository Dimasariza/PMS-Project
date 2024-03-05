import { Card } from '@mui/material';
import {
    CardMedia,
    CardContent,
    Skeleton
} from '@mui/material';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';


const ShipCard = ({ shipInfo, entriesPerRow, loading = false }) => {
    const router = useRouter();
    const { setShipId } = useContext(SidebarContext);
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

    const openDetails = (incomingID) => {
        setShipId(incomingID)
        router.push(`/dashboards/ship-details?id=${shipInfo.id}`)
    }

    return (
        <>
        <Card sx={{ 
            width: cardSizes[entriesPerRow - 1].cardWidth, 
            height: '35vh', 
            aspectRatio: '1/1',
            minHeight: {
                xs: 300
            }, 
            maxHeight: {
                xs: 300,
                sm: 350
            }, 
            background: '#FFFFFF', 
            padding: cardSizes[entriesPerRow - 1].padding, boxSizing: 'border-box' 
        }}>
            {
                loading ? 
                <Skeleton variant="rounded" animation="wave" sx={{height: cardSizes[entriesPerRow - 1].imageHeight, boxSizing: 'border-box' }}/>
                :
                <CardMedia
                    sx={{ height: cardSizes[entriesPerRow - 1].imageHeight }}
                    image={shipInfo?.image}
                    title={shipInfo.vessel_name}
                />
            }
            
            <CardContent sx={{ height: cardSizes[entriesPerRow - 1].textHeight }}>
                {
                    loading ? <Skeleton /> : 
                    <Typography gutterBottom variant="h5" component="div" align='left' color='#000000'>
                        {shipInfo?.vessel_name}
                    </Typography>
                }
            </CardContent>
            <CardActions sx={{ height: cardSizes[entriesPerRow - 1].actionHeight }}>
                <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    {
                        loading ? 
                        <Skeleton variant="rounded" animation="wave" sx={{width:'50%', boxSizing: 'border-box' }}/>
                        :
                        <Button 
                            size="small" 
                            width='50%' 
                            variant="contained" 
                            color="primary"
                            className="text-3xl font-bold underline"
                            onClick={() => {openDetails(shipInfo.id)}}
                        >
                            See Details
                        </Button>
                    }
                </div>
            </CardActions>
            </Card>
        </>
    );
};

export default ShipCard;
