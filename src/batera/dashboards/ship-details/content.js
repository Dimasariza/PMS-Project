import { Card, Box, Alert, AlertTitle } from '@mui/material';
import SummaryTable from './SummaryTable';
import { useRouter  } from 'next/router'
import ShipDetailCard from './details';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Content() {
    const [shipDetail, setShipDetail] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)

    // Get ship details and summary job
    const router = useRouter()
    const id = router.query?.id
    const url = process.env.NEXT_PUBLIC_API_URL + "/ship/" + id

    const getData = async () => {
        await axios.get(url)
        .then(resp => setShipDetail(resp.data.data))
        .catch(error => setErrorMessage(error.message))
    }

    useEffect(() => {
        if(router.isReady) getData()
    }, [router.isReady])
    
    return (
        <>
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
                <Box>
                    <Card>
                        <ShipDetailCard data={shipDetail} />
                    </Card>
                    <Card style={{ marginTop : "2rem" }}>
                        <SummaryTable data={shipDetail} />
                    </Card>
                </Box>
            }
        </>
    );
}

export default Content;
