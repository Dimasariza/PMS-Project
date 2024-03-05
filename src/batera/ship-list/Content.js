import { useState, useEffect } from 'react';
import ShipCard from './ShipCard';
import { useMediaQuery } from '@mui/material';
import { Box, Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import { useSession } from 'next-auth/react';

function Content() {
    const [shipList, setShipList] = useState([
        {
            id: 1,
            vessel_name: "test",
            image: null,
        },
        {
            id: 2,
            vessel_name: "test",
            image: null,
        },
        {
            id: 3,
            vessel_name: "test",
            image: null,
        },
        {
            id: 4,
            vessel_name: "test",
            image: null,
        },
        {
            id: 5,
            vessel_name: "test",
            image: null,
        },
        {
            id: 6,
            vessel_name: "test",
            image: null,
        },
        {
            id: 7,
            vessel_name: "test",
            image: null,
        },
        {
            id: 8,
            vessel_name: "test",
            image: null,
        },
    ]);
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(true);
    const { data : session } = useSession() 

    const url = process.env.NEXT_PUBLIC_API_URL + "/ships" 
    const getData = async () => {
        await axios.get(url)
        .then(resp => {
            setShipList(resp.data); 
            setLoading(false);
            // console.log(resp.data);
        })
        .catch(error => setErrorMessage(error.message))
    }

    useEffect(() =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${session.user.jwt}`; 
        getData()
    }, [])

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => (theme.breakpoints.between('sm', 'md') || theme.breakpoints.equals('sm') || theme.breakpoints.equals('lg')));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    const entriesPerRow = isSmallScreen ? 1 : isMediumScreen ? 2 : isLargeScreen ? 4 : 3;

    const CardBlocks = ({index, loading = false}) =>{
        return(
        <div style={{display: 'flex', width: '100%', flexDirection: 'row', gap: '2%', marginBottom: '2%'}}>
            {Array(entriesPerRow).fill().map((_, i) => {
            const shipIndex = index + i;
            return shipIndex < shipList.length ? 
            <ShipCard key={i} shipInfo={shipList[shipIndex]} entriesPerRow={entriesPerRow} loading={loading}/> 
            : null;
            })}
        </div>
        )
    }

    return (
        <Box width={'100%'} height={'100%'} >
        {
            errorMessage 
            ?
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {errorMessage}
                <br />
                <strong>
                    check it out!
                </strong>
            </Alert>
            :
            shipList.map((ship, index) => {
                if(index % entriesPerRow === 0){
                    return <CardBlocks index={index} key={index} loading={loading}/>
                }
            }) 
        }
        </Box>
    );
}

export default Content;
