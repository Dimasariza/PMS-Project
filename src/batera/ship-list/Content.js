import { useState, useEffect } from 'react';
import ShipCard from './ShipCard';
import { useMediaQuery } from '@mui/material';
import { Box, Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import { useSession } from 'next-auth/react';

function Content() {
    const [shipList, setShipList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)
    const { data : session } = useSession() 

    const url = process.env.NEXT_PUBLIC_API_URL + "/ship" 
    const getData = async () => {
        await axios.get(url, {
            headers : {
                Authorization : `Bearer ${session?.user.accessToken}`
            }
        })
        .then(resp => setShipList(resp.data.data.results))
        .catch(error => setErrorMessage(error.message))
    }

    useEffect(() =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${session?.user.accessToken}`;
        getData()
    }, [])

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery((theme) => (theme.breakpoints.between('sm', 'md') || theme.breakpoints.equals('sm') || theme.breakpoints.equals('lg')));
    const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    const entriesPerRow = isSmallScreen ? 1 : isMediumScreen ? 2 : isLargeScreen ? 4 : 3;

    const CardBlocks = ({index}) =>{
        return(
        <div style={{display: 'flex', width: '100%', flexDirection: 'row', gap: '2%', marginBottom: '2%'}}>
            {Array(entriesPerRow).fill().map((_, i) => {
            const shipIndex = index + i;
            return shipIndex < shipList.length ? 
            <ShipCard key={i} shipInfo={shipList[shipIndex]} entriesPerRow={entriesPerRow}/> 
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
                    return <CardBlocks index={index} key={index}/>
                }
            }) 
        }
        </Box>
    );
}

export default Content;
